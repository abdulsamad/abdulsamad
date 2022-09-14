import Head from 'next/head';
import type { NextPage } from 'next';

import ThankYouContent from '../components/layout/thank-you';

const ThankYou: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta
          name="description"
          content="Your technical partner towards web success"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThankYouContent />
    </>
  );
};

export default ThankYou;
