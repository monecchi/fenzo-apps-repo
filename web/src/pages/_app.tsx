import Head from 'next/head'
import { AppProps } from 'next/app'
import React, { useState, useCallback, useEffect } from 'react'
import useDeviceDetect from '../hooks/useDeviceDetect'
import {
  Box,
  ChakraProvider
} from '@chakra-ui/react'
//import { useMediaQuery } from '@chakra-ui/react'

// https://github.com/wirtzdan/website
import customTheme from '../../styles/theme'
//import FontFace from '../../styles/font-face'
import { Fonts } from '../../styles/Fonts'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import RouteChangeIndicator from '../components/RouteChangeIndicator'
import Nprogress from '../components/RouteChangeIndicator/Progress' //ngprogress on router change
import NavbarMain from '../components/Navbar/NavbarMain'
import NavbarMobile from '../components/Navbar/NavbarMobile'
import FenzoAnnouncer from '../components/Announcer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopScrollButton from '../components/ScrollTop'

import '../../styles/global.scss' // global.css styles

//{isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  //let AOS;

  const { isMobile } = useDeviceDetect()
  //const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const [windowHeight, setWindowHeight] = useState(null);

  const updateWindowHeight = useCallback(() => {
    setWindowHeight(window.innerHeight - 1);
  }, [setWindowHeight])

  useEffect(() => {
    document.querySelector("body").classList.add("scroll-smooth");
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    //const AOS = require("aos");
    AOS.init({
      once: true,
      easing: 'ease-out-quad', // default 'ease'
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

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
          <link rel="preconnect" href="https://use.typekit.net/ynp2nrv.css" />
        </Head>
        <Fonts />
        <DefaultSeo {...SEO} />
        <FenzoAnnouncer message="Nova linha kit portões de alumínio. Confira" url="/" />
        {!isMobile ? (<NavbarMain />) : (<></>)}
        {isMobile && (<NavbarMobile isOpen={true} />)}
        {/* <Navbar /> */}
        <Box as="main" className="main-layout">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
      <Nprogress />
      <RouteChangeIndicator />
      {/* <FontFace /> */}
      <TopScrollButton />
    </div>
  )

}

export default MyApp;
