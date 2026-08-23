import { redirects } from '@utils/social-redirects';
import type { PagesEnv } from '@lib/pages-env';

const aggregateDistinctId = 'social-redirect-anonymous';
const eventName = 'social_redirect_clicked';
const trackedQueryParams = ['source', 'placement', 'campaign'] as const;

type RedirectContext = {
  request: Request;
  env: PagesEnv;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  next: () => Promise<Response>;
};

const getRedirectPath = (params: RedirectContext['params']) => {
  const social = params.social;
  if (typeof social !== 'string') return null;

  const path = `/${social}` as keyof typeof redirects;
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

const captureRedirect = async (context: RedirectContext, path: keyof typeof redirects) => {
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
    network: path.slice(1),
    redirect_path: path,
    status_code: String(redirects[path].status),
    ...getTrackingProperties(context.request),
  };
  const referrerOrigin = getReferrerOrigin(context.request);
  if (referrerOrigin) properties.referrer_origin = referrerOrigin;

  try {
    const distinctId = await hashVisitor(context.request, context.env.SOCIAL_REDIRECT_HASH_SALT);
    const response = await fetch(captureUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        event: eventName,
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
  if (!path) return context.next();

  const redirect = redirects[path];
  context.waitUntil(captureRedirect(context, path));

  return new Response(null, {
    status: redirect.status,
    headers: { Location: redirect.destination },
  });
};

export const onRequestGet = handleRedirect;
export const onRequestHead = handleRedirect;
