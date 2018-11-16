import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="author" content="Geonwoo Jeong" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Store, buy all your swag" />
          <meta name="theme-color" content="black" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.3/antd.min.css"
            rel="stylesheet"
          />
          <style>{`body { background-color: #EFF2F5!important}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
