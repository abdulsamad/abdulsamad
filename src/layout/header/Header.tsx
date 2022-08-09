import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 2.5rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: transparent;
  backdrop-filter: blur(60px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

export default Header;
