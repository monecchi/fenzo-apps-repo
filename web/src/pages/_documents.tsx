import React from 'react'
import {ColorModeScript} from '@chakra-ui/react'
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import theme from '../../styles/theme'
//import Head from 'next/head'

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) : Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // custom render, return global html structure
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <link
            href="https://use.typekit.net/ljl1mzv.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=fenzo"></script>
        </body>
      </Html>
    )
  }

}
