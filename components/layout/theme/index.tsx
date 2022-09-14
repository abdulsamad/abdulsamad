import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  color: {
    primary: '#7C65FB',
    primaryTextColor: '#f5f5f5',
    secondary: '#30e3ca',
    danger: '#F44336',
    success: '#4CAF50',
    light: '#f5f5f5',
    dark: '#1f1f1f',
    grey: '#9E9E9E',
    background: '#1f1f1f',
    backgroundSecondary: '#4f4f4f',
    text: '#f5f5f5',
    white: '#ffffff',
    black: '#000000',
    buttonBackground: 'linear-gradient(to right, #73A1FF, #7C65FB)',
  },
  fontFamily: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, Helvetica, sans-serif',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

export const lightTheme: DefaultTheme = {
  color: {
    primary: '#7C65FB',
    primaryTextColor: '#f5f5f5',
    secondary: '#30e3ca',
    danger: '#F44336',
    success: '#4CAF50',
    light: '#f5f5f5',
    dark: '#1f1f1f',
    grey: '#9E9E9E',
    background: '#f1f1f1',
    backgroundSecondary: '#f5f5f5',
    text: '#f5f5f5',
    white: '#ffffff',
    black: '#000000',
    buttonBackground: 'linear-gradient(to right, #73A1FF, #7C65FB)',
  },
  fontFamily: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, Helvetica, sans-serif',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

export default lightTheme;
