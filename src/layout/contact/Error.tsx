import styled from "styled-components";

const ErrorStyled = styled.small<{ margin?: string }>`
  margin: ${({ margin }) => margin ?? "-8px 0 0 5px"};
  font-size: 0.85rem;
  opacity: 0.8;
  color: ${({ theme }) => theme.color.danger};
`;

export default ErrorStyled;
