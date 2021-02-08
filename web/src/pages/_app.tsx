import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'; // import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import FontFace from '../../styles/font-face'
import Nprogress from '../components/Loading/Progress' //ngprogress on router change
import Navbar from '../components/Navbar/Navbar'
//import SlickThemeCustomStyles from '../components/Slider/styles/slick-theme-custom' // jsx styles overrides custom slick-theme.css
//import FenzoSlickSlider from '../components/Slider/styles/fenzo-slick-slider' // jsx styles overrides custom slick-theme.css

//import { Global } from "@emotion/react"

// styled-components global theme imports (not being used in favor of chakra-ui)
//import { ThemeProvider } from 'styled-components' // styled-components theme provider
//import themealt from '../../styles/theme'

import '../../styles/global.scss' // global.css styles

//import GlobalStyle from '../../styles/global' // Custom global reset

// https://github.com/wirtzdan/website
//import FontFace from '../../styles/font-face' // <Global styles={fonts} />
import customTheme from '../../styles/theme'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={customTheme} resetCSS={true}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Serralheria moderna de alto padrão. Portões em alumínio, vidro temperado, coberturas e telhados de vidro, escadas e guarda corpo." />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3300ff" />
        <meta name="application-name" content="Fenzo Serralheria" />
        <meta name="msapplication-TileColor" content="#3300ff" />
        <meta name="theme-color" content="#3300ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSeo {...SEO} />
      <FontFace />
      {/* <GlobalStyle /> */}
      <Nprogress />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
