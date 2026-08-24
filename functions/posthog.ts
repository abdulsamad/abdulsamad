import type { PagesEnv } from '@lib/pages-env';

type AnalyticsContext = {
  request: Request;
  env: PagesEnv;
  executionCtx?: { waitUntil(promise: Promise<unknown>): void };
};

const analyticsHeaders = (request: Request) => {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const clientIp = request.headers.get('CF-Connecting-IP')?.trim();
  if (clientIp) headers.set('X-Forwarded-For', clientIp);

  const userAgent = request.headers.get('User-Agent');
  if (userAgent) headers.set('User-Agent', userAgent);

  return headers;
};

const captureServerEvent = (
  { request, env, executionCtx }: AnalyticsContext,
  event: string,
  properties: Record<string, string | number | boolean | undefined>
) => {
  const host = env.POSTHOG_UPSTREAM_HOST?.trim().replace(/\/+$/, '');
  const apiKey = env.PUBLIC_POSTHOG_KEY?.trim();
  if (!host || !apiKey) return;

  const task = (async () => {
    const captureUrl = new URL(`${host}/capture/`);
    if (captureUrl.protocol !== 'https:') return;

    const distinctId = request.headers.get('X-PostHog-Distinct-Id') || 'portfolio-server';
    const sessionId = request.headers.get('X-PostHog-Session-Id');
    await fetch(captureUrl, {
      method: 'POST',
      headers: analyticsHeaders(request),
      body: JSON.stringify({
        api_key: apiKey,
        event,
        distinct_id: distinctId,
        properties: {
          ...properties,
          ...(sessionId ? { $session_id: sessionId } : {}),
        },
      }),
    });
  })().catch(() => undefined);

  executionCtx?.waitUntil(task);
};

export { captureServerEvent };
