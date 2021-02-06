import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'; // import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar'
import FontFace from '../../styles/font-face'
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
      <FontFace />
      {/* <GlobalStyle /> */}
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
