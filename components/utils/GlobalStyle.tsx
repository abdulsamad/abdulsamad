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
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  ::-webkit-scrollbar {
    border: none;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 20px;
  }

`;

export default GlobalStyle;
