import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import Header from "../src/layout/header";
import Contact from "../src/layout/contact";
import { initialProdLog } from "../src/utils";
import Skills from "../src/layout/skills/Skills";
import Testimonials from "../src/layout/testimonials";
import Hero from "../src/layout/hero";

const Home: NextPage = () => {
  useEffect(() => {
    initialProdLog();
  }, []);

  return (
    <>
      <Head>
        <title>Abdul Samad Ansari - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Abdul Samad Ansari - Portfolio" />
        <meta
          name="description"
          content="Your technical partner towards web success"
        />
        <meta name="author" content="Abdul Samad Ansari" />
        <meta
          name="keywords"
          content="web developer, abdul samad ansari, software engineer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulsamad.dev" />
        <meta
          property="og:title"
          content="Abdul Samad Ansari - Portfolio"
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
          content="Abdul Samad Ansari - Portfolio"
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
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
