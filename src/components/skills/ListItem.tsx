import styled from 'styled-components';
import svg from '../../assets/arrow.svg';

const ListItem = styled.li`
  margin: 0 4rem;
  white-space: nowrap;
  line-height: 3rem;
  list-style-type: none;

  &::before {
    content: '➡️';
    margin-right: 5px;
  }
`;

export default ListItem;
