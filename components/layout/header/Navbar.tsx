import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export default Navbar;
