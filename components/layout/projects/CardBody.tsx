import styled from 'styled-components';

const CardBody = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  max-width: 50ch;
  margin: 1em 0;
`;

export default CardBody;
