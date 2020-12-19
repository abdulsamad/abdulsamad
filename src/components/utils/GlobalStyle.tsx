import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.color.dark};
    color: ${({ theme }) => theme.color.font};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  ::-webkit-scrollbar {
    background-color: #effbff;
    border: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
