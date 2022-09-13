import { motion } from 'framer-motion';
import styled from 'styled-components';

const Navbar = styled(motion.nav)`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.text};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transform-origin: top;
  }
`;

export default Navbar;
