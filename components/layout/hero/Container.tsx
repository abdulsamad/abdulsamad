import styled from 'styled-components';
import Container from '../../utils/Container';

const HeroContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
  z-index: 10;
  margin: 0 0 0 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 100px 5vw;
  }
`;

export default HeroContainer;
