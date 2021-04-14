//
// Theme variables
//

//import theme from '@chakra-ui/theme'
import { extendTheme } from '@chakra-ui/react'
import { mode, Styles, createBreakpoints } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { ThemeConfig } from '@chakra-ui/theme/dist/types/theme.types'
import { ColorModeOptions } from '@chakra-ui/system'

const config: ThemeConfig | ColorModeOptions = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const breakpoints = createBreakpoints({
  xs: "0em",
  sm: "20em", // 320px, chakra default is 30em = 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536
})

const fonts = {
  heading: `"soleil", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `"soleil", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
}

const fontSizeBase = 1;

const headingsBase = {
  fontWeight: '600',
  marginBottom: '.95rem',
  letterSpacing: '-.03em',
}

const calcFontSize = (base: number, value: number) => {
  const result = base * value;
  return `${result.toString()}rem`
}

const styles: Styles = {
  global: (props) => ({
    // styles for the `body`
    body: {
      bg: mode("white", "blue.900")(props), // #fefeff
      color: mode("fenzodark.400", "whiteAlpha.800")(props), //
      fontSize: "1rem"
    },
    // styles for the `a`
    a: {
      color: "blue.500",
      _hover: {
        textDecoration: "none",
      },
    },
    h1: {
      fontSize: calcFontSize(fontSizeBase, 2.5), //"1.875rem",
      ...headingsBase,
    },
    h2: {
      fontSize: calcFontSize(fontSizeBase, 2),
      ...headingsBase,
    },
    h3: {
      fontSize: calcFontSize(fontSizeBase, 1.75),
      ...headingsBase,
    },
    h4: {
      fontSize: calcFontSize(fontSizeBase, 1.5),
      ...headingsBase,
    },
    h5: {
      fontSize: calcFontSize(fontSizeBase, 1.25),
      ...headingsBase,
    },
    h6: {
      fontSize: calcFontSize(fontSizeBase, 1.1),
      ...headingsBase,
    },
  }),
}

const colors = {
  black: '#1F2D3D',
  primary: {
    50: '#e1ebff', // #e1ebff
    100: '#b1c2ff', // #b1c2ff
    200: '#7e99ff',
    300: '#4c70ff',
    400: '#1a47ff',
    500: '#0336FF',
    600: '#0024b4',
    700: '#001982',
    800: '#000e51',
    900: '#000521',
  },
  blue: {
    25: '#f5f8ff',
    50: '#e1ebff',
    100: '#b1c2ff',
    200: '#7e99ff',
    300: '#4c70ff',
    400: '#1a47ff',
    500: '#0336FF', //#002ee6
    600: '#0024b4',
    700: '#001982',
    800: '#000e51',
    900: '#000521',
  },
  paleblue: {
    50: "#eaeeff",
    100: "#d5deff",
    200: "#c0cdff",
    300: "#acbcff",
    400: "#97acff",
    500: "#819bff",
    600: "#6c8aff",
    700: "#5678ff",
    800: "#3e65ff",
    900: "#2450ff"
  },
  subtleblue: {
    50: "#f4f7ff",
    100: "#eaeeff",
    200: "#dfe6ff",
    300: "#d5ddff",
    400: "#cad5ff",
    500: "#c0cdff",
    600: "#b5c4ff",
    700: "#abbcff",
    800: "#a0b3ff",
    900: "#96abff",
  },
  bluegray: {
    1000: "#050609",
    900: "#1a1b2b",
    800: "#2a2d46",
    700: "#3c4063",
    600: "#515478",
    500: "#676a89",
    400: "#7e819b",
    300: "#9698ae",
    200: "#aeb0c1",
    100: "#c7c9d4",
    50: "#e1e2e8",
    25: "#fbfbfc",
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
  brand: {
    blue: '#0336FF', // #0033FF
    bluedark: '#1D1D42',
    bluedarker: '#141432',
    bluegray: '#1e213e',
    dark_blue: '#201E78',
    black: "#242939",
    dark: '#37384e',
    customGray: '#4a4b65',
    gray: '#737491',
    light_gray: '#F8F8FB',
    smooth_gray: '#F6F9FD',
    silver: '#c9d8e6',
    graysilver: '#8492A6',
    gray_dark: '#4a4b65',
    gray_text: '#37384e',
    danger: '#ef2840',
    softdanger: '#fcd4d9',
    softsuccess: '#def4ed',
    success: '#36b37e'
  },
  fenzodark: {
    50: "#ECEFF9",
    100: "#C9D2ED",
    200: "#A7B5E2",
    300: "#4a5568",
    400: "#38445f",
    500: "#1e213e",
    600: "#10132d",
    700: "#070f2b",
    800: "#070f26",
    900: "#010923" // #010923
  }
}

const customFontSizes = {
  h1: calcFontSize(fontSizeBase, 2.5),
  h2: calcFontSize(fontSizeBase, 2),
  h3: calcFontSize(fontSizeBase, 1.75),
  h4: calcFontSize(fontSizeBase, 1.5),
  h5: calcFontSize(fontSizeBase, 1.25),
  h6: calcFontSize(fontSizeBase, 1.1),
}

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
  ...customFontSizes
}

const components = {
  Heading: {
    baseStyle: (props: Dict<any>) => ({
      fontWeight: "600",
      color: mode("fenzodark.400", "whiteAlpha.900")(props)
    }),
  },
  Link: {
    baseStyle: {
      cursor: "pointer",
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
      cursor: "pointer",
      fontWeight: "600",
      rounded: "4px",
      _focus: {
        outline: "none",
        boxShadow: "none"
      }
    },
  },
  Switch: {
    baseStyle: {
      track: {
        _focus: {
          boxShadow: "none"
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
  overlay: 1300, // 1300 default / 9998
  modal: 1400, // 1400 default // 9999
  popover: 1500,
  skipLink: 1600,
  toast: 1700, // 1700 deafult
  tooltip: 1800, // 1800 default // 9999
}

const shadows = {
  xs: '0 0 0 1px rgba(0, 2, 43, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 2, 43, 0.05)',
  default: '0 1px 3px 0 rgba(0, 2, 43, 0.1), 0 1px 2px 0 rgba(0, 2, 43, 0.06)',
  md: '0 4px 6px -1px rgba(0, 2, 43, 0.1), 0 2px 4px -1px rgba(0, 2, 43, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 2, 43, 0.1), 0 4px 6px -2px rgba(0, 2, 43, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 2, 43, 0.1), 0 10px 10px -5px rgba(0, 2, 43, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 2, 43, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 2, 43, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none'
}

const customTheme = extendTheme({
  config,
  styles,
  fonts,
  breakpoints,
  colors,
  fontSizes,
  zIndices,
  components,
  shadows
})

export default customTheme;

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
