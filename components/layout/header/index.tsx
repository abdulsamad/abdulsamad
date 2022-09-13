import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Header from './Header';
import NavMenu from './Navbar';
import NavLink from './NavLink';
import Logo from './Logo';
import Container from '../../utils/Container';
import HamburgerBtn from './HamburgerBtn';
import theme from '../theme';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setMatches] = useState(false);

  const query = useRef(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const media = window.matchMedia(query.current);

    if (media.matches !== isMobile) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    // Listen to Resize Event
    window.addEventListener('resize', listener);

    // Remove Resize Event on unmount
    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <Header>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}>
          <Logo height={40} />
        </motion.div>
        <NavMenu
          animate={menuOpen ? 'open' : 'closed'}
          initial={{ scaleY: isMobile ? 0 : 1 }}
          variants={{
            open: { scaleY: 1 },
            closed: { scaleY: isMobile ? 0 : 1 },
          }}>
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
