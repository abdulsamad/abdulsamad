import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavLink = styled(motion.a)`
  position: relative;
  font-size: 1.2rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 30px;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  padding: 10px;

  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: translateY(-5px);
    }
  
    &::after {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      height: 3px;
      width: 100%;
      width: calc(100% - 20px)
      display: block;
      background-color: ${({ theme }) => theme.color.text};
      transform: scaleX(0);
      transition: transform 300ms ease-out;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    color: currentColor;
  }
`;

export default NavLink;
