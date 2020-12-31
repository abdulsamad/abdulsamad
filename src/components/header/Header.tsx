import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 2rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  backdrop-filter: blur(60px);
  z-index: 10;
`;

export default Header;
