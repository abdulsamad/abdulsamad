import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const PROXY_PREFIX = '/zen-route';
const DEFAULT_POSTHOG_HOST = import.meta.env.POSTHOG_UPSTREAM_HOST || 'https://us.i.posthog.com';

const FORWARDED_REQUEST_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'content-type',
  'origin',
  'referer',
  'user-agent',
];

const getUpstreamHost = () => {
  const configuredHost = env.POSTHOG_UPSTREAM_HOST ?? import.meta.env.POSTHOG_UPSTREAM_HOST;
  const upstreamHost = new URL(configuredHost || DEFAULT_POSTHOG_HOST);

  if (upstreamHost.protocol !== 'https:' && upstreamHost.protocol !== 'http:') {
    throw new Error('POSTHOG_UPSTREAM_HOST must use http or https');
  }

  upstreamHost.pathname = upstreamHost.pathname.replace(/\/$/, '');
  return upstreamHost;
};

const proxy: APIRoute = async ({ request }) => {
  let upstreamHost: URL;

  try {
    upstreamHost = getUpstreamHost();
  } catch {
    return new Response('Analytics proxy has an invalid upstream host', { status: 500 });
  }

  const incomingUrl = new URL(request.url);
  const upstreamUrl = new URL(upstreamHost);
  upstreamUrl.pathname = `${upstreamHost.pathname}${incomingUrl.pathname.slice(PROXY_PREFIX.length) || '/'}`;
  upstreamUrl.search = incomingUrl.search;

  const headers = new Headers();
  for (const headerName of FORWARDED_REQUEST_HEADERS) {
    const value = request.headers.get(headerName);
    if (value) headers.set(headerName, value);
  }
  const response = await fetch(upstreamUrl, {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
  });

  const responseHeaders = new Headers(response.headers);
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
};

export const ALL = proxy;
