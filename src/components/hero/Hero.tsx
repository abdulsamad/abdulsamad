import styled from 'styled-components';

const Hero = styled.section`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  padding-top: 60px;
  background: #1b1b1b;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    box-sizing: content-box;
  }
`;

export default Hero;
