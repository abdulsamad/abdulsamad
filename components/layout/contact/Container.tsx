import styled from 'styled-components';

import Container from '../../utils/Container';

const NewContainer = styled(Container)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export default NewContainer;
