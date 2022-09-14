import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2em;

  & + & {
    margin: 2em 0 0 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export default ProjectContainer;
