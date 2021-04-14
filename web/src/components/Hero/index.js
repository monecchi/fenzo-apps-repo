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
import Section from '../../components/Section'
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
    <Box
      as="section"
      display="flex"
      w="100%"
      minH="60vh"
      py="6rem"
      {...rest}
    >
      <Flex
        justifyContent={{ base: "center", md: "space-around", xl: "space-between" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        wrap="no-wrap"
        maxW="1366px"
        m="0 auto"
        px={5}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
          data-aos="fade-up"
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

        <Box
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          mb={{ base: 0, md: 0 }}
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <Image src={image} size="100%" rounded="0.35rem" shadow="xl" mb={{ base: 5, sm: 2, md: 0 }} opacity={useColorModeValue("1", "0.8")} />
        </Box>
      </Flex>
    </Box>
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
