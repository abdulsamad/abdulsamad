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
import { captureServerEvent } from '../posthog';

const githubUrl = `${githubApiBaseUrl}/graphql`;
const cacheKey = 'pinned-repositories';
const cacheMaxAgeSeconds = 900;

export const onRequestGet = async ({
  env,
  request,
  executionCtx,
}: {
  env: PagesEnv;
  request: Request;
  executionCtx?: { waitUntil(promise: Promise<unknown>): void };
}) => {
  const cached = await getCachedResponse(cacheKey, cacheMaxAgeSeconds);
  const trackResponse = (response: Response) => {
    captureServerEvent({ request, env, executionCtx }, 'portfolio_pinned_projects_served', {
      source: response.headers.get('X-Repository-Data-Source') ?? 'unknown',
      status_code: response.status,
    });
    return response;
  };
  if (cached?.fresh) return trackResponse(responseFromCache(cached));

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
    return trackResponse(responseFromCache(cached));
  }

  try {
    return trackResponse(await refresh());
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Pinned repositories request failed');
    const fallback = PinnedProjectsFallbackSchema.parse(fallbackProjects);
    return trackResponse(responseFromJson(fallback.githubPinnedItems, 'fallback'));
  }
};
