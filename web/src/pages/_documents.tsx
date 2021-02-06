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
          <meta charSet="utf-8" />
          <meta name="description" content="Serralheria moderna de alto padrão. Portões em alumínio, vidro temperado, coberturas e telhados de vidro, escadas e guarda corpo." />
          <link rel="preconnect" href="https://use.typekit.net"></link>
          <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png" />
          <link rel="manifest" href="../../public/manifest.json" />
          <link rel="mask-icon" href="../../public/safari-pinned-tab.svg" color="#3300ff" />
          <meta name="application-name" content="Fenzo Serralheria" />
          <meta name="msapplication-TileColor" content="#3300ff" />
          <meta name="theme-color" content="#3300ff" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
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
