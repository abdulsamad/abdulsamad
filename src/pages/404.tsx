import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/utils/SEO';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title='404: Not Found' />
      <h1>{siteTitle}</h1>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default NotFoundPage;
