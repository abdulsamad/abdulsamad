const CACHE_ORIGIN = 'https://abdulsamad.dev';
const CLIENT_CACHE_CONTROL = 'public, max-age=60';
const EDGE_CACHE_CONTROL = 'public, max-age=86400';
const MAX_STALE_SECONDS = 86400;

interface EdgeCache {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
}

interface CacheEntry {
  response: Response;
  age: number;
  fresh: boolean;
}

const getEdgeCache = () => {
  const runtimeCaches = (globalThis as typeof globalThis & { caches?: { default?: EdgeCache } })
    .caches;
  return runtimeCaches?.default;
};

const getCacheRequest = (key: string) =>
  new Request(`${CACHE_ORIGIN}/__github-cache/${encodeURIComponent(key)}`);

export const githubCacheHeaders = {
  'Cache-Control': CLIENT_CACHE_CONTROL,
  Vary: 'Accept-Encoding',
};

export const getCachedResponse = async (
  key: string,
  maxAgeSeconds: number
): Promise<CacheEntry | null> => {
  const edgeCache = getEdgeCache();
  if (!edgeCache) return null;

  let response: Response | undefined;
  try {
    response = await edgeCache.match(getCacheRequest(key));
  } catch {
    return null;
  }
  if (!response) return null;

  const fetchedAt = Number(response.headers.get('X-GitHub-Cache-Fetched-At'));
  if (!Number.isFinite(fetchedAt)) return null;

  const age = Math.max(0, Math.floor((Date.now() - fetchedAt) / 1000));
  if (age > MAX_STALE_SECONDS) return null;
  return { response, age, fresh: age < maxAgeSeconds };
};

export const putCachedResponse = async (key: string, response: Response) => {
  const edgeCache = getEdgeCache();
  if (!edgeCache || !response.ok) return;

  const headers = new Headers(response.headers);
  // Keep the internal snapshot longer than the freshness window. The function
  // uses X-GitHub-Cache-Fetched-At to decide when to refresh it.
  headers.set('Cache-Control', EDGE_CACHE_CONTROL);
  headers.set('X-GitHub-Cache-Fetched-At', String(Date.now()));

  try {
    await edgeCache.put(
      getCacheRequest(key),
      new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'GitHub cache write failed');
  }
};

export const responseFromCache = (entry: CacheEntry) => {
  const headers = new Headers(entry.response.headers);
  headers.set('Cache-Control', CLIENT_CACHE_CONTROL);
  headers.set('X-Repository-Data-Source', 'cache');
  headers.set('X-Repository-Cache-Age', String(entry.age));

  return new Response(entry.response.clone().body, {
    status: entry.response.status,
    statusText: entry.response.statusText,
    headers,
  });
};

export const responseFromJson = (data: unknown, source: 'github' | 'fallback') =>
  Response.json(data, {
    headers: {
      ...githubCacheHeaders,
      'X-Repository-Data-Source': source,
      'X-Repository-Cache-Age': '0',
    },
  });

export const runInBackground = (
  executionCtx: { waitUntil(promise: Promise<unknown>): void } | undefined,
  task: Promise<unknown>
) => {
  if (executionCtx) {
    executionCtx.waitUntil(
      task.catch((error) => console.error(error instanceof Error ? error.message : error))
    );
  }
};
