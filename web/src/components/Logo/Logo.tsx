import React, { createRef } from 'react'
import Link from 'next/link'
import {
  forwardRef,
  Flex,
  Box,
  BoxProps,
  VStack,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

import FenzoLogoCor from '../../assets/logo/fenzo-logo-cor-slogan.svg'
import FenzoLogoWhite from '../../assets/logo/fenzo-logo-white-slogan.svg'
import FenzoLogoSimple from '../../assets/logo/fenzo-logo-cor.svg'

export const SvgLogoSimple = (props: BoxProps | any) => {
  const { width } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="100%" viewBox="0 0 238 51.978">
      <path fill="currentColor" d="M189.653,1316.936a25.773,25.773,0,0,1-13.782-13.781,26.329,26.329,0,0,1,0-20.291,25.022,25.022,0,0,1,5.539-8.226,25.808,25.808,0,0,1,28.517-5.605,26.631,26.631,0,0,1,13.846,13.847,25.808,25.808,0,0,1-5.6,28.516,24.92,24.92,0,0,1-8.226,5.539,26.232,26.232,0,0,1-20.29,0Zm-4.18-29.9a15.586,15.586,0,1,0,14.389-9.6A15.6,15.6,0,0,0,185.473,1287.037Zm-52.415,31.687v-7.519l22.879-34.088H133.65l7.256-9.827h29.208v7.584L146.905,1308.9H171.04l-7.255,9.827Zm-17.186,0-22.748-32.115v32.115H82.769V1267.29h9.164l23.017,32.443V1267.29H125.3v51.434Zm-75,0v-9.855h33.3v9.855Zm-40.873,0V1267.29H33.831v9.827H10.354v11.867H33.831v9.827H10.354v19.912Zm40.873-20.79v-9.855h33.3v9.855Zm185.066-24.694a6.03,6.03,0,1,1,6.017,6.017A6.028,6.028,0,0,1,225.939,1273.24Zm1.556,0a4.475,4.475,0,1,0,4.461-4.539A4.506,4.506,0,0,0,227.495,1273.24Zm-186.622,3.9v-9.854h33.3v9.854Zm192.277-.766-1.686-2.361h-.337v2.361h-1.4v-6.25h1.53c2.075,0,2.957.571,2.957,1.893a1.87,1.87,0,0,1-1.246,1.79l1.894,2.568Zm-2.023-3.5c1.012,0,1.634-.077,1.634-.8,0-.648-.338-.8-1.634-.8Z" transform="translate(0 -1267)" />
    </svg>
  )
};

interface LogoProps {
  width: string;
  fill: string;
}
export const SvgLogoSlogan = (props: BoxProps | LogoProps) => {
  const { width } = props
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width as string} height="100%" viewBox="0 0 238 79.956" className="fenzo__logo_slogan">
        <g transform="translate(-835 -821.713)">
          <path fill={"currentColor"} d="M295.317,1447.584a25.593,25.593,0,0,1-13.685-13.684,26.144,26.144,0,0,1,0-20.148,24.842,24.842,0,0,1,5.5-8.168,25.628,25.628,0,0,1,28.316-5.565,26.44,26.44,0,0,1,13.749,13.749,25.626,25.626,0,0,1-5.565,28.316,24.732,24.732,0,0,1-8.168,5.5,26.049,26.049,0,0,1-20.147,0Zm-4.15-29.689a15.476,15.476,0,1,0,14.288-9.529A15.487,15.487,0,0,0,291.167,1417.9Zm-52.046,31.465v-7.465l22.718-33.849h-22.13l7.2-9.758h29v7.531L252.87,1439.6h23.965l-7.2,9.759Zm-17.066,0-22.587-31.889v31.889H189.187v-51.072h9.1L221.14,1430.5v-32.215h10.282v51.072Zm-74.471,0v-9.786h33.064v9.786Zm-40.585,0v-51.072h33.593v9.758H117.281v11.785h23.312v9.758H117.281v19.772Zm40.585-20.643v-9.786h33.064v9.786Zm185.44-24.52a5.988,5.988,0,1,1,5.975,5.975A5.985,5.985,0,0,1,333.024,1404.2Zm1.545,0a4.443,4.443,0,1,0,4.43-4.507A4.474,4.474,0,0,0,334.57,1404.2Zm-186.985,3.877v-9.786h33.064v9.786Zm192.6-.76-1.674-2.345h-.335v2.345h-1.391v-6.207H338.3c2.06,0,2.936.567,2.936,1.88a1.857,1.857,0,0,1-1.236,1.777l1.88,2.55Zm-2.009-3.478c1,0,1.623-.077,1.623-.8,0-.643-.335-.8-1.623-.8Z" transform="translate(728 -576.287)" />
        </g>
        <Box as="text" x="0" y="95%" className="brand_slogan" fill={useColorModeValue("blue.700", "whiteAlpha.600")}>Serralheria forte, para durar</Box>
      </svg>
      <style jsx global>
        {`
          .header_responsive__logo .brand_slogan {
            color: var(--chakra-colors-blue-700);
            font-size: var(--chakra-fontSizes-md);
            font-weight: 600;
            line-height: 0;
            overflow: visible;
            width: 100%;
            letter-spacing: .015em;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  )
};


const toggleLogo = (mode: string) => {
  if (mode === "dark") {
    return (
      <Icon as={() => <FenzoLogoWhite />} w="164px" h="55px" maxH="55px" minH="55px" color={useColorModeValue("inherit", "white")} />
    )
  }
  return (
    <Icon as={() => <FenzoLogoCor />} w="164px" h="55px" maxH="55px" minH="55px" color={useColorModeValue("inherit", "white")} />
  )
};

//
// Main Logo Component
//
const Logo = ({ url }, props: BoxProps) => {

  const { colorMode } = useColorMode()


  if (url) {
    return (
      <Link href={"/" || url}>
        <Flex w="100%" maxW="164px" h="55px" maxH="55px" cursor="pointer" alignItems="center" {...props}>
          {toggleLogo(colorMode)}
        </Flex>
      </Link>
    )
  }
  return (
    <Flex w="100%" maxW="164px" h="55px" maxH="55px" cursor="pointer" alignItems="center" {...props}>
      {toggleLogo(colorMode)}
    </Flex>
  )
}

export default Logo


/**
 * Reusable SVG logo as component.
 * LogoSlogan composes chakra-ui `Box` so you can pass all the Box props
 * @optional Use url parameter to return the logo component wrapped within a link
 * @return SVG Logo with the Brand's slogan as text
 */
export const LogoSlogan = forwardRef<BoxProps | any, "div">((props, ref) => {

  //const { href } = props

  if (props.href) {
    return (
      <Link href={"/" || props.href} aria-label="Fenzo Serralheria Alumínio">
        <Box ref={ref} {...props}><SvgLogoSlogan {...props} /></Box>
      </Link>
    )
  }
  return (
    <Box ref={ref} {...props}><SvgLogoSlogan {...props} /></Box>
  )
});

/**
 * Reusable SVG logo as component.
 * LogoSimple composes chakra-ui `Box` so you can pass all the Box props
 * @optional Use url parameter to return the logo component wrapped within a link
 * @return SVG Logo without the Brand's slogan
 */
export const LogoSimple = forwardRef<BoxProps | any, "div">((props, ref) => {

  const { url } = props

  if (url) {
    return (
      <Link href={"/" || url} aria-label="Fenzo Serralheria Alumínio">
        <Box {...props} ref={ref}><SvgLogoSimple {...props} /></Box>
      </Link>
    )
  }
  return (
    <Box {...props} ref={ref}><SvgLogoSimple {...props} /></Box>
  )
});
