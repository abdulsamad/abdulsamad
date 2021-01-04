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
  backdrop-filter: blur(100px);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  transform-origin: top;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.616);
`;

const MobileNavLink = styled.a`
  text-decoration: none;
  display: block;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.font};
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

interface Props {
  open: boolean;
}

const ResponsiveMenu: React.FC<Props> = ({ open }) => (
  <Transition
    items={open}
    from={{ opacity: 0, transform: 'scaleY(0)' }}
    enter={{ opacity: 1, transform: 'scaleY(1)' }}
    leave={{ opacity: 0, transform: 'scaleY(0)' }}>
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
