import styled from 'styled-components';

const GridIcon = styled.img`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  margin: -2.3em 0 0 -2.3em;
  opacity: 0.75;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: -1.8em 0 0 -1.8em;
  }
`;

export default GridIcon;
