import React from 'react';

import Footer from './Footer';

interface Props {
  path: string;
  data: {
    [key: string]: any;
  };
}

const Index: React.FC<Props> = ({ path, data }) => {
  return <Footer>&copy; {new Date().getFullYear()} - abdulsamad.dev</Footer>;
};

export default Index;
