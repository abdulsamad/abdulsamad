import styled from 'styled-components';

const ErrorStyled = styled.small<{ margin?: string }>`
  margin: ${({ margin }) => margin ?? '-1em 0 0 0'};
  padding: 0 0 10px 0;
  font-size: 0.85rem;
  opacity: 0.8;
  color: ${({ theme }) => theme.color.danger};
  text-align: center;
`;

export default ErrorStyled;
