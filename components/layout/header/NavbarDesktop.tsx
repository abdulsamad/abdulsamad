import React from 'react';

import Navbar from './Navbar';
import NavLink from './NavLink';

const NavbarDesktop = ({
  navbarLinks,
}: {
  navbarLinks: { title: string; id: string }[];
}) => {
  return (
    <Navbar>
      {navbarLinks.map(({ title, id }) => (
        <NavLink key={id} href={id}>
          {title}
        </NavLink>
      ))}
    </Navbar>
  );
};

export default NavbarDesktop;
