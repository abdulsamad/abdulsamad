import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  margin: 1rem 0;
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
