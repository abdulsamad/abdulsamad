import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';

import { initialProdLog, githubPinnedReposQuery } from '../utils';
import { GitHubPinnedReposType, Node } from '../utils/types';
import Loader from '../components/utils/Loader';
import Header from '../components/layout/header';
import Hero from '../components/layout/hero';
import Skills from '../components/layout/skills';
import Projects from '../components/layout/projects';
import Testimonials from '../components/layout/testimonials';
import Contact from '../components/layout/contact';

export type GithubPinnedItemTypes = Omit<Node, 'repositoryTopics'> & {
  topics: string[];
};

interface IHome {
  githubPinnedItems: GithubPinnedItemTypes[];
}

const Home: NextPage<IHome> = ({ githubPinnedItems }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialProdLog();

    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Abdul Samad Ansari - Web Developer</title>
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Projects githubPinnedItems={githubPinnedItems} />
      <Testimonials />
      <Contact />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  };

  const req = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers,
    body: githubPinnedReposQuery,
  });

  const res = await req.json();
  const data: GitHubPinnedReposType = await res.data;

  const filteredProjects = data.user.pinnedItems.edges.map(
    ({
      node: {
        description,
        homepageUrl,
        id,
        name,
        openGraphImageUrl,
        url,
        repositoryTopics,
      },
    }) => {
      // Filters, cleans the topics and returs a new array
      const topics = repositoryTopics.edges.map(
        ({
          node: {
            topic: { name },
          },
        }) => {
          return name;
        }
      );

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
    props: {
      githubPinnedItems: filteredProjects,
    },
  };
};

export default Home;
