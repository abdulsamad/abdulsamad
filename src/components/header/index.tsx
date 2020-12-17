import React from 'react';

import Navbar from './Header';
import NavMenu from './NavMenu';
import NavLink from './NavLink';
import Logo from './Logo';
import Container from '../utils/Container';

const Index: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <Logo height={48} />
        <NavMenu>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavMenu>
      </Navbar>
    </Container>
  );
};

export default Index;
