import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      primaryTextColor: string /* Font color on primary colored button, nav, etc.. */;
      secondary: string;
      danger: string;
      success: string;
      light: string;
      dark: string;
      grey: string;
      background: string;
      text: string;
      white: string;
      buttonBackground: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
