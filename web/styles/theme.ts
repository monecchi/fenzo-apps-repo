//
// Theme variables
//

import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const fonts = {
    body: "'soleil',-apple-system,BlinkMacSystemFont,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    heading: "'soleil',-apple-system,BlinkMacSystemFont,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
}

const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: "gray.100",
      color: "black",
      fontSize: "1rem",
    },
    // styles for the `a`
    a: {
      color: "blue.500",
      _hover: {
        textDecoration: "none",
      },
    },
    h1: {
      lineHeight: 1.2,
      fontWeight: "600",
      fontSize: "1.875rem",
      letterSpacing: ".035rem",
    },
  },
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
  brand: {
    blue: '#0033FF',
    dark_blue: '#201E78',
    dark: '#37384e',
    customGray: '#4a4b65',
    gray: '#737491',
    light_gray: '#F8F8FB',
    gray_dark: '#4a4b65',
    gray_text: '#37384e'

  },
  gray: {
    50: '#737491',
    100: "#F5F8FA",
    200: "#EFF2F5",
    300: "#E4E6EF",
    400: "#B5B5C3",
    500: "#A1A5B7",
    600: "#7E8299",
    700: "#5E6278",
    800: "#3F4254",
    900: "#181C32"
  },
}

const components = {
  Heading: {
    baseStyle: (props) => ({
      fontWeight: "600",
    }),
  },
  Link: {
    baseStyle: {
      fontWeight: "inherit",
      _hover: {
        textDecoration: "none",
      },
      _focus: {
        boxShadow: "none",
      }
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "600",
      rounded: "4px",
      _focus: {
        boxShadow: "none",
      }
    },
  },
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
  config,
  fonts,
  colors,
  styles,
  zIndices,
  components
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
