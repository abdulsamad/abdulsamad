import styled from 'styled-components';
import Container from '../utils/Container';

const HeroText = styled(Container)`
  margin: 200px 0 0 200px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin: 100px 5vw;
  }
`;

export default HeroText;
