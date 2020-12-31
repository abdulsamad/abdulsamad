import React from 'react';

import Header from './Header';
import NavMenu from './NavMenu';
import NavLink from './NavLink';
import Logo from './Logo';
import Container from '../utils/Container';
import HamburgerMenu from './HamburgerMenu';

const Index: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo height={48} />
        <NavMenu>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavMenu>
        <HamburgerMenu />
      </Header>
    </Container>
  );
};

export default Index;
