import Head from 'next/head';
import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import theme from '../components/layout/theme/index';
import GlobalStyle from '../components/utils/GlobalStyle';

import ThankYouContent from '../components/layout/thank-you';

const ThankYou: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thank You - AbdulSamad Ansari</title>
        <meta
          name="description"
          content="A web developer who loves crafting awesome web experiences. Skilled in HTML, CSS, JavaScript, React, TypeScript, Node, and MongoDB"
        />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThankYouContent />
      </ThemeProvider>
    </>
  );
};

export default ThankYou;
