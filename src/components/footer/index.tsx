import React from 'react';

import Footer from './Footer';

interface Props {
  path: string;
  data: {
    [key: string]: any;
  };
}

const Index: React.FC<Props> = ({ path, data }) => {
  return (
    <Footer>
      You're currently on the page "{path}" which was built on{' '}
      {data.site.buildTime}.
    </Footer>
  );
};

export default Index;
