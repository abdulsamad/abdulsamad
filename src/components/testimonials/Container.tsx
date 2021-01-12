import styled from 'styled-components';
import Container from '../utils/Container';

const UpdatedContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export default UpdatedContainer;
