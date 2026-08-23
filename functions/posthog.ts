import type { PagesEnv } from '@lib/pages-env';

type AnalyticsContext = {
  request: Request;
  env: PagesEnv;
  executionCtx?: { waitUntil(promise: Promise<unknown>): void };
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
      headers: { 'Content-Type': 'application/json' },
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
