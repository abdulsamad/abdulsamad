import styled from 'styled-components';

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 351px;
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    height: 251px;
  }
`;

export default ProjectImageContainer;
