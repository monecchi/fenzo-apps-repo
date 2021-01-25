//
// Theme variables
//

import { extendTheme } from "@chakra-ui/react"

const fonts = {
    fonts: {
    body: "'soleil',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    heading: "'soleil',sans-serif",
  }
}

const colors = {
  black: '#1F2D3D',
  blue: {
    50:  '#e1ebff',
    100: '#b1c2ff',
    200: '#7e99ff',
    300: '#4c70ff',
    400: '#1a47ff',
    500: '#002ee6',
    600: '#0024b4',
    700: '#001982',
    800: '#000e51',
    900: '#000521',
  },
  primary: {
    50:  '#e1ebff',
    100: '#b1c2ff',
    200: '#7e99ff',
    300: '#4c70ff',
    400: '#1a47ff',
    500: '#002ee6',
    600: '#0024b4',
    700: '#001982',
    800: '#000e51',
    900: '#000521',
  },
}

const Components = {
  Component: {
    Accordion: {
      baseStyle: {
        button: {
          _focus: {
            boxShadow: '0 4px 11px rgba(190, 194, 255, 0.28)'
          }
        }
      }
    }
  }
}

const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 9998, // 1300 default
  modal: 9999, // 1400 default
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}


const customTheme = extendTheme({
  fonts,
  colors,
  zIndices,
  Components
})

export default customTheme

//import { theme } from "@chakra-ui/react";

// const customTheme = {
//   fonts: {
//     body: "'soleil',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
//     heading: "'soleil',sans-serif",
//   },
//   colors: {
//     ...theme.colors,
//     brand: {
//       50:  '#e1ebff',
//       100: '#b1c2ff',
//       200: '#7e99ff',
//       300: '#4c70ff',
//       400: '#1a47ff',
//       500: '#002ee6',
//       600: '#0024b4',
//       700: '#001982',
//       800: '#000e51',
//       900: '#000521',
//     },
//   }
// }

// export default customTheme;

// const theme = {
//   colors: {
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
