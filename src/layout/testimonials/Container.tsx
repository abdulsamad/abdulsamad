import styled from "styled-components";
import Container from "../utils/Container";

const UpdatedContainer = styled(Container)`
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default UpdatedContainer;
