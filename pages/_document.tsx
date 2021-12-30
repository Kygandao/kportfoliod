import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-gradient-to-r from-black via-gray-800 to-gray-600'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument