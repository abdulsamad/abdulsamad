import styled from 'styled-components';

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default ProjectImageContainer;
