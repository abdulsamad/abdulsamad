import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 5px 10px;
`;

export default Link;
