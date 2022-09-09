import styled from 'styled-components';

const Navbar = styled.nav<{ menuOpen: boolean }>`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    right: 0;
    transition: 10s ease-in-out;
    opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
    left: 0;
  }
`;

export default Navbar;
