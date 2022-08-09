import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../src/layout/theme/index';
import GlobalStyle from '../src/layout/utils/GlobalStyle';

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
