import Head from 'next/head';
import type { NextPage } from 'next';

import ThankYouContent from '../components/layout/thank-you';

const ThankYou: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Thank You - Abdul Samad Ansari</title>
        <meta
          name="description"
          content="A web developer who loves crafting awesome web experiences. Skilled in HTML, CSS, JavaScript, React, TypeScript, Node, and MongoDB"
        />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThankYouContent />
    </>
  );
};

export default ThankYou;
