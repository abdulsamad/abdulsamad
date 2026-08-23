import axios from 'axios';

import { githubPinnedReposQuery } from '@utils/index';
import fallbackProjects from './_fallback-projects.json';

import type { GitHubPinnedReposType } from './_types';

export const GET = async () => {
  try {
    const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

    // No access token found
    if (!GITHUB_ACCESS_TOKEN) throw new Error('No access token found!');

    // Headers
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    };

    // Request
    const res = await axios.post('https://api.github.com/graphql', githubPinnedReposQuery, {
      headers,
    });
    const data: GitHubPinnedReposType = res.data.data;
    const filteredProjects = data.user.pinnedItems.edges.map(
      ({
        node: { description, homepageUrl, id, name, openGraphImageUrl, url, repositoryTopics },
      }) => {
        // Cleans the topics
        const cleanedTopics = repositoryTopics.edges.map(
          ({
            node: {
              topic: { name },
            },
          }) => {
            return name;
          }
        );

        // Filter the topics
        const technologies = [
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
        ];

        const topics = cleanedTopics.filter((name: string) => technologies.includes(name));

        return {
          homepageUrl,
          description,
          name: name.split('-').join(' '),
          id,
          url,
          openGraphImageUrl,
          topics,
        };
      }
    );

    return Response.json(filteredProjects);
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    // Error Log
    console.error(errMsg);

    return Response.json(fallbackProjects.githubPinnedItems);
  }
};
