import React, { useState } from 'react';
import { Variants } from 'framer-motion';

import { ResponsiveNavbar } from './Navbar';
import NavLink from './NavLink';
import HamburgerBtn from './HamburgerBtn';

const navbarVariants: Variants = {
  open: {
    scaleY: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      damping: 100,
    },
  },
  closed: {
    scaleY: 0,
  },
};

const navlinkVariants: Variants = {
  open: {
    opacity: 1,
    translateY: 0,
  },
  closed: {
    opacity: 0,
    translateY: -16,
  },
};

const NavbarMobile = ({
  navbarLinks,
}: {
  navbarLinks: { title: string; id: string }[];
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <>
      <ResponsiveNavbar
        animate={menuOpen ? 'open' : 'closed'}
        initial="closed"
        variants={navbarVariants}>
        {navbarLinks.map(({ title, id }) => (
          <NavLink key={id} href={id} variants={navlinkVariants}>
            {title}
          </NavLink>
        ))}
      </ResponsiveNavbar>
      <HamburgerBtn menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavbarMobile;
