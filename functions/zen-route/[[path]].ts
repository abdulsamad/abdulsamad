import { z } from 'zod';
import type { PagesEnv } from '@lib/pages-env';

const proxyPrefix = '/zen-route';
const forwardedHeaders = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'content-type',
  'origin',
  'referer',
  'user-agent',
];

const upstreamSchema = z.url().trim().refine((value) => new URL(value).protocol === 'https:', {
  message: 'POSTHOG_UPSTREAM_HOST must be an HTTPS URL',
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const onRequest = async ({ request, env }: { request: Request; env: PagesEnv }) => {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

  const parsedHost = upstreamSchema.safeParse(env.POSTHOG_UPSTREAM_HOST);
  if (!parsedHost.success) return new Response('Analytics proxy has an invalid upstream host', { status: 500 });

  const incomingUrl = new URL(request.url);
  const upstreamUrl = new URL(parsedHost.data);
  const suffix = incomingUrl.pathname.slice(proxyPrefix.length) || '/';
  upstreamUrl.pathname = `${upstreamUrl.pathname.replace(/\/$/, '')}${suffix}`;
  upstreamUrl.search = incomingUrl.search;

  const headers = new Headers();
  for (const headerName of forwardedHeaders) {
    const value = request.headers.get(headerName);
    if (value) headers.set(headerName, value);
  }

  try {
    const response = await fetch(upstreamUrl, {
      method: request.method,
      headers,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
    });
    const responseHeaders = new Headers(response.headers);
    Object.entries(corsHeaders).forEach(([name, value]) => responseHeaders.set(name, value));
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch {
    return new Response('Analytics proxy upstream request failed', { status: 502, headers: corsHeaders });
  }
};
