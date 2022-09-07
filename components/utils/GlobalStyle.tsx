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
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.color.background};
    border: none;
  }v

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
