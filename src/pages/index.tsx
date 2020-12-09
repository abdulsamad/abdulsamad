import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <Nav />
    <Layout>
      <SEO title='Using TypeScript' />
      <h1>Gatsby supports TypeScript by default!</h1>
      <p>
        This means that you can create and write <em>.ts/.tsx</em> files for
        your pages, components etc. Please note that the <em>gatsby-*.js</em>{' '}
        files (like gatsby-node.js) currently don't support TypeScript yet.
      </p>
      <p>
        For type checking you'll want to install <em>typescript</em> via npm and
        run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>
        You're currently on the page "{path}" which was built on{' '}
        {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{' '}
        <a href='https://www.gatsbyjs.com/docs/typescript/'>
          documentation about TypeScript
        </a>
        .
      </p>
    </Layout>
  </>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
