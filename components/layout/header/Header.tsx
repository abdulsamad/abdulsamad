import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(30px);
`;

export default Header;
