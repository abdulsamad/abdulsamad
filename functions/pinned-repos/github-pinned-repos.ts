import { z } from 'zod';

const RepositorySchema = z.object({
  name: z.string(),
  id: z.string(),
  url: z.url(),
  description: z
    .string()
    .nullable()
    .transform((value) => value ?? ''),
  homepageUrl: z
    .url()
    .nullable()
    .transform((value) => value ?? ''),
  openGraphImageUrl: z
    .url()
    .nullable()
    .transform((value) => value ?? ''),
  repositoryTopics: z.object({
    edges: z.array(
      z.object({
        node: z.object({ topic: z.object({ name: z.string() }) }),
      })
    ),
  }),
});

export const PinnedProjectSchema = z.object({
  homepageUrl: z.union([z.url(), z.literal('')]),
  description: z.string(),
  name: z.string(),
  id: z.string(),
  url: z.url(),
  openGraphImageUrl: z.union([z.url(), z.literal('')]),
  topics: z.array(z.string()),
});

export const PinnedProjectsFallbackSchema = z.object({
  githubPinnedItems: z.array(PinnedProjectSchema),
});

export const GitHubResponseSchema = z.object({
  data: z.object({
    user: z.object({
      pinnedItems: z.object({
        edges: z.array(z.object({ node: RepositorySchema })),
      }),
    }),
  }),
});

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

export const toPinnedProjects = (payload: unknown) => {
  const parsed = GitHubResponseSchema.parse(payload);

  return parsed.data.user.pinnedItems.edges.map(({ node }) => ({
    homepageUrl: node.homepageUrl,
    description: node.description,
    name: node.name.split('-').join(' '),
    id: node.id,
    url: node.url,
    openGraphImageUrl: node.openGraphImageUrl,
    topics: node.repositoryTopics.edges
      .map(({ node: topicNode }) => topicNode.topic.name)
      .filter((topic) => technologies.has(topic)),
  }));
};
