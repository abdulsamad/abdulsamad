import styled from 'styled-components';

const ErrorStyled = styled.div`
  padding: 0.5rem 0;
  border-radius: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.danger};
`;

export default ErrorStyled;
