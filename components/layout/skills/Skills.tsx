import styled from 'styled-components';

const Skills = styled.section`
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 3em 0;
  scroll-margin-top: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 3em;
  }
`;

export default Skills;
