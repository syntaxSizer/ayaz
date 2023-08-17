import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicon/android-icon-192x192.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon/favicon-96x96.png"
          />
          <link rel="dns-prefetch" href="//maps.googleapis.com" />
          <link rel="preconnect" href="//maps.googleapis.com" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicon/ms-icon-144x144.png"
          />
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Fq4TJJJf9WNnwVs5fgC0if4CHR9cUIQ&libraries=places"
            async
            defer
          ></script>
          <script
            src="/static/scripts/other.js"
            crossOrigin="true"
            charSet="utf-8"
            async
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-148579900-1"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
