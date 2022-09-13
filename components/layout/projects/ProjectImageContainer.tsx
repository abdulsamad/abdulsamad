import styled from 'styled-components';

const ProjectImageContainer = styled.div`
  height: 100%;
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

export default ProjectImageContainer;
