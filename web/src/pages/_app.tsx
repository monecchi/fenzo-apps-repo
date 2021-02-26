import Head from 'next/head'
import React, { useState, useEffect } from 'react'
//import { useMediaQuery } from 'beautiful-react-hooks'
import { AppProps } from 'next/app'
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react' // import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// https://github.com/wirtzdan/website
import customTheme from '../../styles/theme'
import FontFace from '../../styles/font-face'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import RouteChangeIndicator from '../components/RouteChangeIndicator'
import Nprogress from '../components/RouteChangeIndicator/Progress' //ngprogress on router change
import Navbar from '../components/Navbar/Navbar'
//import NavbarDesktop from '../components/Navbar/NavBarDesktop'
import NavbarMobile from '../components/Navbar/NavbarMobile'
//import SlickThemeCustomStyles from '../components/Slider/styles/slick-theme-custom' // jsx styles overrides custom slick-theme.css
//import FenzoSlickSlider from '../components/Slider/styles/fenzo-slick-slider' // jsx styles overrides custom slick-theme.css

//import { Global } from "@emotion/react"

// styled-components global theme imports (not being used in favor of chakra-ui)
//import { ThemeProvider } from 'styled-components' // styled-components theme provider
//import themealt from '../../styles/theme'

import '../../styles/global.scss' // global.css styles

//import GlobalStyle from '../../styles/global' // Custom global reset
//<GlobalStyle />

//{isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  //const isMobile = useMediaQuery('(min-width: 1280px)'); // beautifull react hooks not working with ssr

  //const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const [isOpenNavBar, setOpenNavBar] = useState(true);
  const [isOpenHero, setOpenHero] = useState(true);
  const [windowHeight, setWindowHeight] = useState(null);

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight - 1);
  }

  useEffect(() => {
    document.querySelector("body").classList.add("scroll-smooth");
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);


  return (
    <div>
      <ChakraProvider theme={customTheme} resetCSS={true}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Serralheria moderna de alto padrão. Portões em alumínio, vidro temperado, coberturas e telhados de vidro, escadas e guarda corpo." />
          <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3300ff" />
          <meta name="application-name" content="Fenzo Serralheria" />
          <meta name="msapplication-TileColor" content="#3300ff" />
          <meta name="theme-color" content="#3300ff" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="preconnect" href="https://use.typekit.net" />
        </Head>
        <DefaultSeo {...SEO} />
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
      <Nprogress />
      <RouteChangeIndicator />
      <FontFace />
    </div>
  )

}

export default MyApp;
