import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../components/utils/GlobalStyle';
import SEO from '../components/utils/SEO';
import Header from '../components/header';
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    // prettier-ignore
    if (process.env.NODE_ENV === 'production') {
      const txt = '%c This website is developed by AbdulSamad. Hopefully there are no error and warnings in console! 😄';
      const art = `%c
     ___   _____   _____   _   _   _       _____       ___       ___  ___       ___   _____  
    /   | |  _  \\ |  _  \\ | | | | | |     /  ___/     /   |     /   |/   |     /   | |  _  \\ 
   / /| | | |_| | | | | | | | | | | |     | |___     / /| |    / /|   /| |    / /| | | | | | 
  / /_| | |  _  { | | | | | | | | | |     \\___  \\   / /_| |   / / |__/ | |   / /_| | | | | | 
 / /  | | | |_| | | |_| | | |_| | | |___   ___| |  / /  | |  / /       | |  / /  | | | |_| | 
/_/   |_| |_____/ |_____/ \\_____/ |_____| /_____/ /_/   |_| /_/        |_| /_/   |_| |_____/ `;

      console.log(art, 'font-weight: bold; color: #2f89fc;');
      console.log(txt, 'font-size: 16px; font-weight: 600; text-shadow: 1px 1px 2px #c4c4c4,1px 1px 2px #d3d3d3; margin: 5px 0;');
    }
  }, []);

  return (
    <>
      <Normalize />
      <SEO
        title='Portfolio - AbdulSamad Ansari'
        description='Your technical partner towards web success'
        lang='en'
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Testimonials />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
