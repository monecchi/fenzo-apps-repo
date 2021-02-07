import React from 'react'
import {ColorModeScript} from '@chakra-ui/react'
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme from '../../styles/theme'
//import Head from 'next/head'

export default class MyDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext
    ) : Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
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
        <body className="scroll-smooth">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}
