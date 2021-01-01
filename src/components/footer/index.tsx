import React from 'react';

import Footer from './Footer';

const Index: React.FC = () => {
  return <Footer>&copy; {new Date().getFullYear()} - abdulsamad.dev</Footer>;
};

export default Index;
