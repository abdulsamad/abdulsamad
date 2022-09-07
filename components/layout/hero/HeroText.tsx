import styled from 'styled-components';
import Container from '../../utils/Container';

const HeroText = styled(Container)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  transform: translateY(-15%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 100px 5vw;
  }
`;

export default HeroText;
