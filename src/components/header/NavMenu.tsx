import styled from 'styled-components';

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavMenu;
