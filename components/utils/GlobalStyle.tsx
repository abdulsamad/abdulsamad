import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    padding: 0;
    margin: 0; 
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    background: ${({ theme }) => theme.color.background}
  }

  ::-webkit-scrollbar {
    border: none;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.color.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 20px;
  }

`;

export default GlobalStyle;
