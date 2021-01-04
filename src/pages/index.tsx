import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../components/utils/GlobalStyle';
import SEO from '../components/utils/SEO';
import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Normalize />
      <SEO title='AbdulSamad Portfolio' />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
