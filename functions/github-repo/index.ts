import fallbackProjects from './fallback.json';
import type { PagesEnv } from '@lib/pages-env';
import { githubApiBaseUrl, githubOwner, githubUserAgent } from '@utils/github';
import {
  GitHubRepositorySchema,
  RepositoryDetailsFallbackSchema,
  RepositoryDetailsSchema,
} from './schemas';
import {
  getCachedResponse,
  putCachedResponse,
  responseFromCache,
  responseFromJson,
  runInBackground,
} from '@lib/github-cache';
import { captureServerEvent } from '../posthog';

const cacheMaxAgeSeconds = 3600;
const githubHeaders = (token?: string) => ({
  Accept: 'application/vnd.github+json',
  'User-Agent': githubUserAgent,
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

export const onRequestGet = async ({
  env,
  request,
  executionCtx,
}: {
  env: PagesEnv;
  request: Request;
  executionCtx?: { waitUntil(promise: Promise<unknown>): void };
}) => {
  const repositoryName = new URL(request.url).searchParams.get('repo')?.trim();
  if (!repositoryName || !/^[a-zA-Z0-9._-]+$/.test(repositoryName)) {
    captureServerEvent({ request, env, executionCtx }, 'portfolio_project_data_failed', {
      outcome: 'invalid_request',
    });
    return Response.json({ error: 'A valid repository name is required' }, { status: 400 });
  }

  const trackResponse = (response: Response) => {
    captureServerEvent({ request, env, executionCtx }, 'portfolio_project_data_served', {
      project_slug: repositoryName.toLowerCase(),
      source: response.headers.get('X-Repository-Data-Source') ?? 'unknown',
      status_code: response.status,
    });
    return response;
  };

  const cacheKey = `repository:${repositoryName.toLowerCase()}`;
  const cached = await getCachedResponse(cacheKey, cacheMaxAgeSeconds);
  if (cached?.fresh) return trackResponse(responseFromCache(cached));

  const refresh = async () => {
    const token = env.GITHUB_ACCESS_TOKEN?.trim();
    let headers = githubHeaders(token);
    const baseUrl = `${githubApiBaseUrl}/repos/${githubOwner}/${encodeURIComponent(repositoryName)}`;
    let repositoryResponse = await fetch(baseUrl, { headers, signal: AbortSignal.timeout(5000) });
    if (!repositoryResponse.ok && token) {
      headers = githubHeaders();
      repositoryResponse = await fetch(baseUrl, { headers, signal: AbortSignal.timeout(5000) });
    }
    if (!repositoryResponse.ok) throw new Error(`GitHub returned ${repositoryResponse.status}`);

    const repository = GitHubRepositorySchema.parse(await repositoryResponse.json());
    const readmeResponse = await fetch(`${baseUrl}/readme`, {
      headers: { ...headers, Accept: 'application/vnd.github.html+json' },
      signal: AbortSignal.timeout(5000),
    });
    let readmeHtml = '';
    if (readmeResponse.ok) {
      readmeHtml = await readmeResponse.text();
    }

    const result = RepositoryDetailsSchema.parse({
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description ?? '',
      url: repository.html_url,
      homepageUrl: repository.homepage ?? '',
      defaultBranch: repository.default_branch ?? 'main',
      topics: repository.topics ?? [],
      language: repository.language ?? '',
      readmeHtml,
    });
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
    console.error(error instanceof Error ? error.message : 'Repository details request failed');
    const fallbackData = RepositoryDetailsFallbackSchema.parse(fallbackProjects);
    const fallback =
      fallbackData.repositories[
        repositoryName.toLowerCase() as keyof typeof fallbackProjects.repositories
      ];
    if (!fallback) {
      captureServerEvent({ request, env, executionCtx }, 'portfolio_project_data_failed', {
        project_slug: repositoryName.toLowerCase(),
        outcome: 'not_found',
      });
      return Response.json({ error: 'Repository not found' }, { status: 404 });
    }
    return trackResponse(responseFromJson(fallback, 'fallback'));
  }
};
