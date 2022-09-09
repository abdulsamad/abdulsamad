import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    justify-items: center;
  }
`;

export default ProjectContainer;
