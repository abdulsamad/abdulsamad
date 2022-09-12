import { useEffect } from 'react';
import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';

import Header from '../components/layout/header';
import Contact from '../components/layout/contact';
import { initialProdLog, githubPinnedReposQuery } from '../utils';
import Hero from '../components/layout/hero';
import Testimonials from '../components/layout/testimonials';
import Projects from '../components/layout/projects';
import Skills from '../components/layout/skills';
import { GitHubPinnedReposType, Node } from '../utils/types';

export type GithubPinnedItemTypes = Omit<Node, 'repositoryTopics'> & {
  topics: string[];
};

interface IHome {
  githubPinnedItems: GithubPinnedItemTypes[];
}

const Home: NextPage<IHome> = ({ githubPinnedItems }) => {
  useEffect(() => {
    initialProdLog();
  }, []);

  return (
    <>
      <Head>
        <title>AbdulSamad Ansari - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="AbdulSamad Ansari - Portfolio" />
        <meta
          name="description"
          content="Your technical partner towards web success"
        />
        <meta name="author" content="AbdulSamad Ansari" />
        <meta
          name="keywords"
          content="web developer, abdul samad ansari, software engineer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulsamad.dev" />
        <meta
          property="og:title"
          content="AbdulSamad Ansari - Portfolio"
          key="title"
        />
        <meta
          property="og:description"
          content="Your technical partner towards web success"
        />
        {/* <meta property='og:image' content="https://abdulsamad.dev/assets/abdul-samad-ansari.jpg" /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdulsamad.dev" />
        <meta
          property="twitter:title"
          content="AbdulSamad Ansari - Portfolio"
        />
        <meta
          property="twitter:description"
          content="Your technical partner towards web success"
        />
        {/* <meta
          property="twitter:image"
          content="https://abdulsamad.dev/assets/abdul-samad-ansari.jpg"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Projects githubPinnedItems={githubPinnedItems} />
      <Testimonials />
      <Contact />
    </>
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
