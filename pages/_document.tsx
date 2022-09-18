import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="AbdulSamad Ansari - Web Developer" />
          <meta
            name="description"
            content="A web developer who loves crafting awesome web experiences skilled in HTML, CSS, JavaScript, React, TypeScript, Node, and MongoDB"
          />
          <meta name="author" content="AbdulSamad Ansari" />
          <meta
            name="keywords"
            content="web developer, abdul samad ansari, software engineer, react developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abdulsamad.dev" />
          <meta
            property="og:title"
            content="AbdulSamad Ansari - Web Developer"
            key="title"
          />
          <meta
            property="og:description"
            content="A web developer who loves crafting awesome web experiences skilled in HTML, CSS, JavaScript, React, TypeScript, Node, and MongoDB"
          />
          <meta
            property="og:image"
            content="https://abdulsamad.dev/abdulsamad.dev-above-the-fold.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://abdulsamad.dev" />
          <meta
            property="twitter:title"
            content="AbdulSamad Ansari - Web Developer"
          />
          <meta
            property="twitter:description"
            content="A web developer who loves crafting awesome web experiences skilled in HTML, CSS, JavaScript, React, TypeScript, Node, and MongoDB"
          />
          <meta
            property="twitter:image"
            content="https://abdulsamad.dev/abdulsamad.dev-above-the-fold.jpg"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          />
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}
