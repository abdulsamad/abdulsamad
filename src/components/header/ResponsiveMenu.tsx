import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';

const MobileNav = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const MobileNavLink = styled.a`
  text-decoration: none;
  display: block;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.font};
`;

interface Props {
  open: boolean;
}

const ResponsiveMenu: React.FC<Props> = ({ open }) => (
  <Transition
    items={open}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}>
    {(show) =>
      show &&
      ((props) => (
        <MobileNav style={props}>
          <MobileNavLink href='#skills'>Skills</MobileNavLink>
          <MobileNavLink href='#projects'>Project</MobileNavLink>
          <MobileNavLink href='#contact'>Contact</MobileNavLink>
        </MobileNav>
      ))
    }
  </Transition>
);

export default ResponsiveMenu;
