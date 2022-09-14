import styled from 'styled-components';

const Hero = styled.section`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background};
  box-sizing: border-box;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    box-sizing: content-box;
  }
`;

export default Hero;
