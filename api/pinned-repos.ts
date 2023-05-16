import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

import { githubPinnedReposQuery, technologies } from '@utils/index';
import fallbackProjects from '@functions/pinned-repos/fallback-projects.json';

import type { GitHubPinnedReposType } from '@functions/pinned-repos/types';

const handler = async (request: VercelRequest, response: VercelResponse) => {
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

    return response.status(200).json({
      body: JSON.stringify(filteredProjects),
      query: request.query,
      cookies: request.cookies,
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    return response.status(500).json({
      body: JSON.stringify({ fallbackProjects }),
      query: request.query,
      cookies: request.cookies,
    });
  }
};

export default handler;
