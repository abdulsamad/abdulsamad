import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Normalize } from 'styled-normalize';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../components/utils/GlobalStyle';
import SEO from '../components/utils/SEO';
import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const Alert = styled.h2`
  background-color: #2f89fc;
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
`;

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <>
      <Normalize />

      <SEO title='AbdulSamad Portfolio' />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Alert>
          🚧 Website in under active development — Please visit again later! 🚧
        </Alert>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer path={path} data={data} />
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

export default IndexPage;
