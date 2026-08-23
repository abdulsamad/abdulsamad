import fallbackProjects from '@pinned-repos/_fallback-projects.json';
import { githubPinnedReposQuery } from '@utils/index';
import { toPinnedProjects } from '@lib/github-pinned-repos';
import type { PagesEnv } from '@lib/pages-env';

const githubUrl = 'https://api.github.com/graphql';
const cacheHeaders = { 'Cache-Control': 'public, max-age=300, s-maxage=300' };

export const onRequestGet = async ({ env }: { env: PagesEnv }) => {
  try {
    const token = env.GITHUB_ACCESS_TOKEN?.trim();
    if (!token) throw new Error('GITHUB_ACCESS_TOKEN is not configured');

    const response = await fetch(githubUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'User-Agent': 'abdulsamad.dev',
      },
      body: githubPinnedReposQuery,
    });

    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

    return Response.json(toPinnedProjects(await response.json()), { headers: cacheHeaders });
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Pinned repositories request failed');
    return Response.json(fallbackProjects.githubPinnedItems, { headers: cacheHeaders });
  }
};
