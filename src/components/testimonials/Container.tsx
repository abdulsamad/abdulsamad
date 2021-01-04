import styled from 'styled-components';
import Container from '../utils/Container';

const UpdatedContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default UpdatedContainer;
