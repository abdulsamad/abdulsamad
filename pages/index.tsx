import { useEffect } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import Header from '../components/layout/header';
import Contact from '../components/layout/contact';
import { initialProdLog } from '../utils';
import Hero from '../components/layout/hero';
import Testimonials from '../components/layout/testimonials';
import Projects from '../components/layout/projects';
import Skills from '../components/layout/skills';

const Home: NextPage = ({ gitHubPinnedItems }) => {
  useEffect(() => {
    initialProdLog();

    console.log(gitHubPinnedItems);
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
      <Projects gitHubPinnedItems={gitHubPinnedItems} />
      <Testimonials />
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  const req = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      {
        user(login: "abdulsamad") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  name
                  id
                  url
                  description
                  homepageUrl
                  openGraphImageUrl
                }
              }
            }
          }
        }
      }
    `,
    }),
  });

  const res = await req.json();

  const filterProjectNodes = res.data.user.pinnedItems.edges.map(
    ({ node }) => node
  );

  return {
    props: {
      gitHubPinnedItems: filterProjectNodes,
    },
  };
}

export default Home;
