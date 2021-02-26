import React from 'react'
//import { Link } from 'react-router-dom'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { ButtonPrimary } from '../Buttons'

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  helperText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      maxW="1366px"
      minH="70vh"
      m="0 auto"
      px={5}
      mt={{ base: 8, sm: 8, md: 8, lg: 0 }}
      mb={{ base: 8, sm: 8, md: 8, lg: 0 }}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="700"
          color={useColorModeValue("primary.800", "white")} //"primary.800"
          textAlign={["center", "center", "left", "left"]}
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
          mb={{ base: 2, sm: 0, md: 0, lg: 0 }}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color={useColorModeValue("primary.800", "blue.50")}
          opacity="0.8"
          fontWeight="400"

          textAlign={["center", "center", "left", "left"]}
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
        >
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <ButtonPrimary
            colorScheme="primary"
            borderRadius="base" // none, sm, base, md, lg, xl, "2xl": "1rem", "3xl": "1.5rem",  full: "9999px",
            py={5}
            px={4}
            mt={4}
            lineHeight="1"
            size="lg"
            variant="solid"
          >
            {ctaText}
          </ButtonPrimary>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color={useColorModeValue("primary.800", "primary.100")}
          opacity="0.6"
        >
          {helperText}
        </Text>
      </Stack>
      <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }} mb={{ base: 0, md: 0 }}>
        <Image src={image} size="100%" rounded="0.35rem" shadow="xl" mb={{ base: 5, sm: 2, md: 0 }} />
      </Box>
    </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

Hero.defaultProps = {
  title: "Serralheria moderna",
  subtitle:
    "Especialistas em serralheria de alto padrão",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "A Fenzo Faz",
  ctaLink: "/contato",
}
