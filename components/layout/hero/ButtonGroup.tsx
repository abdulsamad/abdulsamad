import styled from 'styled-components';

const ButtonGroup = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;

    a {
      white-space: nowrap;
    }
  }
`;

export default ButtonGroup;
