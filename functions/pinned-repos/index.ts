import fallbackProjects from '@pinned-repos/fallback.json';
import { githubPinnedReposQuery } from '@utils/index';
import { githubApiBaseUrl, githubUserAgent } from '@utils/github';
import { PinnedProjectsFallbackSchema, toPinnedProjects } from './github-pinned-repos';
import {
  getCachedResponse,
  putCachedResponse,
  responseFromCache,
  responseFromJson,
  runInBackground,
} from '@lib/github-cache';
import type { PagesEnv } from '@lib/pages-env';

const githubUrl = `${githubApiBaseUrl}/graphql`;
const cacheKey = 'pinned-repositories';
const cacheMaxAgeSeconds = 900;

export const onRequestGet = async ({
  env,
  executionCtx,
}: {
  env: PagesEnv;
  executionCtx?: { waitUntil(promise: Promise<unknown>): void };
}) => {
  const cached = await getCachedResponse(cacheKey, cacheMaxAgeSeconds);
  if (cached?.fresh) return responseFromCache(cached);

  const refresh = async () => {
    const token = env.GITHUB_ACCESS_TOKEN?.trim();
    if (!token) throw new Error('GITHUB_ACCESS_TOKEN is not configured');

    const response = await fetch(githubUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'User-Agent': githubUserAgent,
      },
      body: githubPinnedReposQuery,
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

    const result = toPinnedProjects(await response.json());
    const apiResponse = responseFromJson(result, 'github');
    await putCachedResponse(cacheKey, apiResponse);
    return apiResponse;
  };

  if (cached) {
    runInBackground(executionCtx, refresh());
    return responseFromCache(cached);
  }

  try {
    return await refresh();
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Pinned repositories request failed');
    const fallback = PinnedProjectsFallbackSchema.parse(fallbackProjects);
    return responseFromJson(fallback.githubPinnedItems, 'fallback');
  }
};
