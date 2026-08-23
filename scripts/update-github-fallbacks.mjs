import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

try {
  process.loadEnvFile();
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}

const token = process.env.GITHUB_ACCESS_TOKEN?.trim();
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pinnedFallbackPath = path.join(root, 'functions/pinned-repos/fallback.json');
const detailsFallbackPath = path.join(root, 'functions/github-repo/fallback.json');
const githubHeaders = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${token ?? ''}`,
  'Content-Type': 'application/json',
  'User-Agent': 'portfolio-github-fallback-updater',
  'X-GitHub-Api-Version': '2022-11-28',
};
const technologies = new Set([
  'html',
  'css',
  'scss',
  'javascript',
  'typescript',
  'react',
  'css-in-js',
  'material-ui',
  'dayjs',
  'vite',
  'emotion',
  'content-api',
  'mongoosejs',
  'localforage',
  'monaco-editor',
  'react-split',
  'styled-components',
  'xterm',
  'mongodb',
  'pwa',
  'node',
  'nodejs',
  'open-weather-map-api',
  'axios',
  'superagent',
  'redux',
  'redux-toolkit',
  'react-spring',
  'famer-motion',
  'react-router-dom',
  'nextjs',
  'gatsby',
  'reach-router',
  'alpine-js',
  'bulma',
  'jspdf',
  'workbox',
]);

if (!token) {
  throw new Error('GITHUB_ACCESS_TOKEN is missing from .env');
}

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: { ...githubHeaders, ...options.headers },
    signal: AbortSignal.timeout(10000),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(`GitHub returned ${response.status} for ${url}`);
  return payload;
};

const fetchPinnedRepositories = async (owner) => {
  const payload = await fetchJson('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        {
          user(login: "${owner}") {
            pinnedItems(first: 50) {
              edges {
                node {
                  ... on Repository {
                    name
                    id
                    url
                    description
                    homepageUrl
                    openGraphImageUrl
                    repositoryTopics(first: 100) {
                      edges { node { topic { name } } }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  if (payload.errors?.length || !Array.isArray(payload.data?.user?.pinnedItems?.edges)) {
    throw new Error(
      payload.errors?.[0]?.message ?? 'GitHub returned an invalid pinned repositories payload'
    );
  }

  return payload.data.user.pinnedItems.edges.map(({ node }) => {
    if (!node?.name || !node?.url || !node?.id)
      throw new Error('Pinned repository payload is missing required fields');
    return {
      homepageUrl: node.homepageUrl ?? '',
      description: node.description ?? '',
      name: node.name.split('-').join(' '),
      id: node.id,
      url: node.url,
      openGraphImageUrl: node.openGraphImageUrl ?? '',
      topics: (node.repositoryTopics?.edges ?? [])
        .map(({ node: topicNode }) => topicNode?.topic?.name)
        .filter((topic) => typeof topic === 'string' && technologies.has(topic)),
    };
  });
};

const fetchRepositoryDetails = async (owner, repositoryName) => {
  const baseUrl = `https://api.github.com/repos/${owner}/${encodeURIComponent(repositoryName)}`;
  const repository = await fetchJson(baseUrl);
  if (!repository.name || !repository.html_url || !repository.default_branch) {
    throw new Error(`Repository ${repositoryName} payload is missing required fields`);
  }

  const readmeResponse = await fetch(`${baseUrl}/readme`, {
    headers: { ...githubHeaders, Accept: 'application/vnd.github.html+json' },
    signal: AbortSignal.timeout(10000),
  });
  const readmeHtml = readmeResponse.ok ? await readmeResponse.text() : '';

  return {
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description ?? '',
    url: repository.html_url,
    homepageUrl: repository.homepage ?? '',
    defaultBranch: repository.default_branch,
    topics: Array.isArray(repository.topics) ? repository.topics : [],
    language: repository.language ?? '',
    readmeHtml,
  };
};

const writeJsonAtomically = async (filePath, value) => {
  const temporaryPath = `${filePath}.tmp-${process.pid}`;
  await fs.writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  await fs.rename(temporaryPath, filePath);
};

const viewer = await fetchJson('https://api.github.com/user');
const owner = viewer.login;

if (typeof owner !== 'string' || !owner) {
  throw new Error('GitHub token did not return an authenticated user');
}

const pinnedItems = await fetchPinnedRepositories(owner);
const repositoryNames = pinnedItems.map((project) => project.url.split('/').pop()).filter(Boolean);
const details = await Promise.all(
  repositoryNames.map(async (name) => [
    name.toLowerCase(),
    await fetchRepositoryDetails(owner, name),
  ])
);

await writeJsonAtomically(pinnedFallbackPath, { githubPinnedItems: pinnedItems });
await writeJsonAtomically(detailsFallbackPath, { repositories: Object.fromEntries(details) });

console.log(`Updated pinned fallback with ${pinnedItems.length} repositories.`);
console.log(`Updated repository-detail fallback with ${details.length} repositories.`);
