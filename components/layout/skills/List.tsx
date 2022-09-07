import styled from 'styled-components';

const List = styled.ul`
  list-style-type: circle;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 600;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    display: block;
    text-align: center;
  }
`;

export default List;
