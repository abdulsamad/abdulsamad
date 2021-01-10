import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Header from './Header';
import NavMenu from './NavMenu';
import NavLink from './NavLink';
import Logo from './Logo';
import Container from '../utils/Container';
import HamburgerMenu from './HamburgerMenu';

const Index: React.FC = () => (
  <Container>
    <Header>
      <Logo height={48} />
      <NavMenu>
        <NavLink onClick={() => scrollTo('#skills')}>Skills</NavLink>
        <NavLink onClick={() => scrollTo('#projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollTo('#contact')}>Contact</NavLink>
      </NavMenu>
      <HamburgerMenu />
    </Header>
  </Container>
);

export default Index;
