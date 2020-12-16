import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
    </ThemeProvider>
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
