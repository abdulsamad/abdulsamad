import React from 'react';
import { useState } from 'react';

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
        <Logo height={40} />
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
