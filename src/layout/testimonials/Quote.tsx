import styled from "styled-components";

const Quote = styled.blockquote`
  margin: 0;
  font: 1.2rem ${({ theme }) => theme.fontFamily.secondary};

  &::before,
  &::after {
    content: '"';
  }
`;

export default Quote;
