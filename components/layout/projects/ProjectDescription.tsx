import styled from 'styled-components';

const ProjectDescription = styled.div`
  margin: 0 0 0 30px;
  width: 50ch;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

export default ProjectDescription;
