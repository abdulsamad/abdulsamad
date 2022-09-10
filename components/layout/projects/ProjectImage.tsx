import styled from 'styled-components';

const ProjectImage = styled.img`
  display: block;
  width: auto;
  transform: skew(20px);
  height: 400px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

export default ProjectImage;
