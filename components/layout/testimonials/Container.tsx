import styled from "styled-components";
import Container from "../../utils/Container";

const UpdatedContainer = styled(Container)`
  gap: 50px;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default UpdatedContainer;
