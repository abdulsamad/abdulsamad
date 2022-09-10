import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0 4rem;
  white-space: nowrap;
  line-height: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin: 0;
    white-space: wrap;
  }
`;

export default ListItem;
