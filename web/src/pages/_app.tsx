import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'; // import { ChakraProvider, extendTheme } from '@chakra-ui/react';
//import { Global } from "@emotion/react"

// styled-components global theme imports (not being used in favor of chakra-ui)
//import { ThemeProvider } from 'styled-components' // styled-components theme provider
//import themealt from '../../styles/theme'

import '../../styles/global.css' // global.css styles

import GlobalStyle from '../../styles/global' // Custom global reset

//import fonts from '../../styles/font-face' // <Global styles={fonts} />
import customTheme from '../../styles/theme'

// const customTheme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     brand: '#0033FF',
//     brand_alt: '#1652F0',
//     background: '#F8F8FB',
//     text: '#8492A6',
//     text_dark: '#3C4858',
//     text_darker: '#273444',
//     text_black: '#1F2D3D',
//     primary: '#0033FF',
//     primary_active: '#0D40C6',
//     text_primary: '#0033FF',
//     headings: '#3C4858'
//   }
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={customTheme} resetCSS={true}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
