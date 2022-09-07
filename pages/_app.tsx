import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "../components/layout/theme/index";
import GlobalStyle from "../components/utils/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
