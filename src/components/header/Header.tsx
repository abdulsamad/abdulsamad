import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 2rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.616);
  backdrop-filter: blur(60px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export default Header;
