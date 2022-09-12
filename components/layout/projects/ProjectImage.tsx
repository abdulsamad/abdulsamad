import styled from 'styled-components';

const ProjectImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  border-radius: 0.6em;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

export default ProjectImage;
