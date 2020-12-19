import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(60px);
  z-index: 10;
`;

export default Header;
