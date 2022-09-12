import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin: 2em 0 0 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    justify-items: center;
  }
`;

export default ProjectContainer;
