import { createGlobalStyle } from 'styled-components';

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    padding: 0;
    margin: 0; 
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) =>
      theme.fontFamily.primary}, Arial, Helvetica, Sans-serif;
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
