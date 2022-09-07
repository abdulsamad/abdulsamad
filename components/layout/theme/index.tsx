import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#2f89fc',
    secondary: '#30e3ca',
    danger: '#F44336',
    success: '#4CAF50',
    light: '#f5f5f5',
    dark: '#1f1f1f',
    background: '#1f1f1f',
    text: '#313131',
    white: '#ffffff',
  },
  fontFamily: {
    primary: 'Inter',
    secondary: 'Inter',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

export default theme;
