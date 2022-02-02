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
        <body className='bg-fixed bg-cover bg-light-background dark:bg-dark-background dark:text-gray-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument