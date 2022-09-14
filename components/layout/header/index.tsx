import React from 'react';
import { motion } from 'framer-motion';

import Header from './Header';
import Logo from './Logo';
import Container from '../../utils/Container';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const navbarLinks = [
  {
    title: 'Skills',
    id: '#skills',
  },
  {
    title: 'Projects',
    id: '#projects',
  },
  {
    title: 'Contacts',
    id: '#contact',
  },
];

const Index = () => {
  return (
    <Header>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}>
          <Logo height={40} />
        </motion.div>
        <NavbarDesktop navbarLinks={navbarLinks} />
        <NavbarMobile navbarLinks={navbarLinks} />
      </Container>
    </Header>
  );
};

export default Index;
