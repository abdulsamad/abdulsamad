import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0 4rem;
  white-space: nowrap;
  line-height: 3rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
    white-space: wrap;
  }
`;

export default ListItem;
