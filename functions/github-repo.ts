import fallbackProjects from '@pinned-repos/_fallback-projects.json';
import type { PagesEnv } from '@lib/pages-env';

const cacheHeaders = { 'Cache-Control': 'public, max-age=300, s-maxage=300' };
const githubHeaders = (token?: string) => ({
  Accept: 'application/vnd.github+json',
  'User-Agent': 'abdulsamad.dev',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

export const onRequestGet = async ({ env, request }: { env: PagesEnv; request: Request }) => {
  const repositoryName = new URL(request.url).searchParams.get('repo')?.trim();
  if (!repositoryName || !/^[a-zA-Z0-9._-]+$/.test(repositoryName)) {
    return Response.json({ error: 'A valid repository name is required' }, { status: 400 });
  }

  try {
    const token = env.GITHUB_ACCESS_TOKEN?.trim();
    let headers = githubHeaders(token);
    const baseUrl = `https://api.github.com/repos/abdulsamad/${encodeURIComponent(repositoryName)}`;
    let repositoryResponse = await fetch(baseUrl, { headers });
    if (!repositoryResponse.ok && token) {
      headers = githubHeaders();
      repositoryResponse = await fetch(baseUrl, { headers });
    }
    if (!repositoryResponse.ok) throw new Error(`GitHub returned ${repositoryResponse.status}`);

    const repository = (await repositoryResponse.json()) as Record<string, unknown>;
    const readmeResponse = await fetch(`${baseUrl}/readme`, {
      headers: { ...headers, Accept: 'application/vnd.github.html+json' },
    });
    let readmeHtml = '';
    if (readmeResponse.ok) {
      readmeHtml = await readmeResponse.text();
    }

    return Response.json(
      {
        name: repository.name,
        fullName: repository.full_name,
        description: repository.description ?? '',
        url: repository.html_url,
        homepageUrl: repository.homepage ?? '',
        defaultBranch: repository.default_branch ?? 'main',
        topics: repository.topics ?? [],
        language: repository.language ?? '',
        readmeHtml,
      },
      { headers: cacheHeaders }
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Repository details request failed');
    const fallback = fallbackProjects.githubPinnedItems.find((project) =>
      project.url.endsWith(`/${repositoryName}`)
    );
    if (!fallback) return Response.json({ error: 'Repository not found' }, { status: 404 });
    return Response.json(
      {
        ...fallback,
        fullName: `abdulsamad/${repositoryName}`,
        defaultBranch: 'main',
        readmeHtml: '',
      },
      { headers: cacheHeaders }
    );
  }
};
