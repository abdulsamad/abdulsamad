import { redirects } from '@utils/social-redirects';
import type { PagesEnv } from '@lib/pages-env';

const aggregateDistinctId = 'external-redirect-anonymous';
const trackedQueryParams = ['source', 'placement', 'campaign'] as const;

const analyticsHeaders = (request: Request) => {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const clientIp = request.headers.get('CF-Connecting-IP')?.trim();
  if (clientIp) headers.set('X-Forwarded-For', clientIp);

  const userAgent = request.headers.get('User-Agent');
  if (userAgent) headers.set('User-Agent', userAgent);

  return headers;
};

type RedirectContext = {
  request: Request;
  env: PagesEnv;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  next: () => Promise<Response>;
};

const getRedirectPath = (params: RedirectContext['params']) => {
  const redirect = params.redirect;
  const redirectPath = Array.isArray(redirect) ? redirect.join('/') : redirect;
  if (typeof redirectPath !== 'string') return null;

  const path = `/${redirectPath}` as keyof typeof redirects;
  if (!(path in redirects)) return null;

  return path;
};

const getReferrerOrigin = (request: Request) => {
  const referrer = request.headers.get('referer');
  if (!referrer) return undefined;

  try {
    return new URL(referrer).origin;
  } catch {
    return undefined;
  }
};

const getTrackingProperties = (request: Request) => {
  const url = new URL(request.url);
  const properties: Record<string, string> = {};

  trackedQueryParams.forEach((param) => {
    const value = url.searchParams.get(param)?.trim();
    if (value && /^[a-zA-Z0-9_-]{1,64}$/.test(value)) properties[param] = value;
  });

  return properties;
};

const hashVisitor = async (request: Request, salt?: string) => {
  const ip = request.headers.get('CF-Connecting-IP')?.trim();
  if (!ip || !salt) return aggregateDistinctId;

  const input = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', input);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const captureRedirect = async (
  context: RedirectContext,
  path: string,
  destinationType: 'social' | 'meeting',
  status: number
) => {
  const host = context.env.POSTHOG_UPSTREAM_HOST?.trim().replace(/\/+$/, '');
  const apiKey = context.env.PUBLIC_POSTHOG_KEY?.trim();
  if (!host || !apiKey) return;

  let captureUrl: URL;
  try {
    captureUrl = new URL(`${host}/capture/`);
    if (captureUrl.protocol !== 'https:') return;
  } catch {
    return;
  }

  const properties: Record<string, string> = {
    destination_type: destinationType,
    redirect_path: path,
    status_code: String(status),
    ...getTrackingProperties(context.request),
  };
  if (destinationType === 'social') properties.network = path.slice(1);
  const referrerOrigin = getReferrerOrigin(context.request);
  if (referrerOrigin) properties.referrer_origin = referrerOrigin;

  try {
    const distinctId = await hashVisitor(context.request, context.env.SOCIAL_REDIRECT_HASH_SALT);
    const response = await fetch(captureUrl, {
      method: 'POST',
      headers: analyticsHeaders(context.request),
      body: JSON.stringify({
        api_key: apiKey,
        event: destinationType === 'meeting' ? 'meeting_redirected' : 'social_redirect',
        distinct_id: distinctId,
        properties,
      }),
    });

    if (!response.ok) console.error(`PostHog redirect event failed with ${response.status}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'PostHog redirect event failed');
  }
};

const handleRedirect = async (context: RedirectContext) => {
  const path = getRedirectPath(context.params);
  if (path) {
    const redirect = redirects[path];
    const destinationType =
      path === '/meeting' || path.startsWith('/meeting/') ? 'meeting' : 'social';
    context.waitUntil(captureRedirect(context, path, destinationType, redirect.status));

    const headers = new Headers({ Location: redirect.destination });
    const noIndexPaths = ['/facebook', '/telegram', '/meeting', '/resume', '/email'];
    if (noIndexPaths.includes(path) || path.startsWith('/meeting/')) {
      headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    }

    return new Response(null, {
      status: redirect.status,
      headers,
    });
  }

  return context.next();
};

export const onRequestGet = handleRedirect;
export const onRequestHead = handleRedirect;
