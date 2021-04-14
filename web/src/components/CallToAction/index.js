import React from "react"
//import { Link } from "react-router-dom"
import Link from 'next/link'
import PropTypes from "prop-types"
import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

import FlexContainer from '../../components/Layouts/FlexContainer'

//
// CTA - Call to Action Component
//
export const CTA = ({
  title,
  content,
  image,
  ctaLink,
  ctaText,
  ...rest
}) => {
  return (
    <FlexContainer
      align="center"
      justify={{ base: "space-around", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      wrap="no-wrap"
      maxW="1366px"
      minH="112px"
      m="0 auto"
      mt={{ base: "2rem", sm: 8, md: 8, lg: "3rem" }}
      mb="0"
      className="cta-simple"
      {...rest}
    >
      <Stack
        spacing={4}
        align={["center", "center", "center", "center"]}
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        w="100%"
        bg={useColorModeValue("#F6F9FD", "fenzodark.600")}
        padding="1rem 2rem"
        borderRadius="md"
      >
        <Box bg="brand.gray" borderRadius="full" w="96px" h="96px" minW="96px">
          <Img src={image} alt={title} shadow="xl" mr={{ base: 2, sm: 2, md: 2 }} mb={{ sm: 2 }} borderRadius="full" boxSize="96px" width="96px" height="96px" userSelect="none" />
        </Box>
        <Heading
          as="h1"
          size="md"
          fontWeight="700"
          color={useColorModeValue("blue.800", "white")}
          textAlign={["center", "center", "center", "left"]}
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
          mb={{ base: 2, sm: 0, md: 0, lg: 0 }}
          mx="1rem"
        >
          {title}
        </Heading>
        <Text
          color={useColorModeValue("blue.800", "gray.200")}
          fontSize="md"
          fontWeight="400"
          textAlign={["center", "center", "justify", "justify"]}
          opacity="0.8"
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
          mx="1rem"
          maxW={{ base: "65%", sm: "100%", md: "60%", lg: "65%" }}
          noOfLines={{ base: 3, sm: 2, md: 2, lg: 3 }}
        >
          {content}
        </Text>
        <Link href={ctaLink}>
          <Button
            colorScheme="blue"
            borderRadius="base" // none, sm, base, md, lg, xl, "2xl": "1rem", "3xl": "1.5rem",  full: "9999px",
            py={5}
            px={4}
            mt={4}
            size="md"
            width="auto"
            variant="link"
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
    </FlexContainer>
  )
}

CTA.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

CTA.defaultProps = {
  title: "Serralheria moderna",
  content:
    "Especialistas em serralheria de alto padrão",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "A Fenzo Faz",
  ctaLink: "/contato",
}
