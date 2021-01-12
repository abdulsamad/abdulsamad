import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      light: string;
      dark: string;
      background: string;
      font: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      sm: string;
    };
  }
}
