import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: #1f1f1f;
    color: #f5f5f5;
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
