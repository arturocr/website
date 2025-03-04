import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/rubik-var.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/rubik-italic-var.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#777777" />
        </Head>
        <body className='font-sans text-white bg-navy'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
