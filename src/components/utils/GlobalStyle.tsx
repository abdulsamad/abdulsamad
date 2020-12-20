import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.font};
    font-family: ${({ theme }) => theme.fontFamily.primary};
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
