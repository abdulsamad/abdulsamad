import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Header from './Header';
import NavMenu from './Navbar';
import NavLink from './NavLink';
import Logo from './Logo';
import Container from '../../utils/Container';
import HamburgerBtn from './HamburgerBtn';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <Header>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <Logo height={40} />
        </motion.div>
        <NavMenu menuOpen={menuOpen}>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavMenu>
        <HamburgerBtn menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </Container>
    </Header>
  );
};

export default Index;
