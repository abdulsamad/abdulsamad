import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

import { githubPinnedReposQuery, technologies } from '@utils/index';
import fallbackProjects from './fallback-projects.json';

import type { GitHubPinnedReposType } from './types';

const handler: Handler = async (event, context) => {
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
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: githubPinnedReposQuery,
    });
    const json: any = await res.json();
    const data: GitHubPinnedReposType = json.data;
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

    return {
      statusCode: 200,
      body: JSON.stringify(filteredProjects),
    };
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    // Error Log
    console.error(errMsg);

    return {
      statusCode: 200,
      body: JSON.stringify(fallbackProjects.githubPinnedItems),
    };
  }
};

export { handler };
