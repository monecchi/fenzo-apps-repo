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
} from "@chakra-ui/react"

export const CTA = ({
  title,
  content,
  image,
  ctaLink,
  ctaText,
  ...rest
}) => {
  return (
    <Flex
      align="center"
      justify={{ base: "space-around", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      wrap="no-wrap"
      maxW="1366px"
      minH="112px"
      m="0 auto"
      px={5}
      mt={{ base: 8, sm: 8, md: 8, lg: 0 }}
      mb={{ base: 8, sm: 8, md: 8, lg: 0 }}
      {...rest}
    >
      <Stack
        spacing={4}
        align={["center", "center", "center", "center"]}
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        w="100%"
        bg={"#F6F9FD"}
        padding="1rem 2rem"
        borderRadius="md"
      >
        <Box bg="brand.gray" borderRadius="full" w="96px" h="96px" minW="96px">
          <Img src={image} alt={title} shadow="xl" mr={{ base: 2, sm: 2, md: 2 }} mb={{ sm: 2 }} borderRadius="full" boxSize="96px" width="96px" height="96px" />
        </Box>
        <Heading
          as="h1"
          size="md"
          fontWeight="700"
          color="primary.800"
          textAlign={["center", "center", "center", "left"]}
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
          mb={{ base: 2, sm: 0, md: 0, lg: 0 }}
          mx="1rem"
        >
          {title}
        </Heading>
        <Text
          size="18px"
          color="primary.800"
          opacity="0.8"
          fontWeight="400"
          textAlign={["center", "center", "justify", "justify"]}
          mt={{ base: 2, sm: 2, md: 0, lg: 0 }}
          mx="1rem"
          maxW="65%"
          noOfLines={[1, 2, 3]}
        >
          {content}
        </Text>
        <Link href={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="base" // none, sm, base, md, lg, xl, "2xl": "1rem", "3xl": "1.5rem",  full: "9999px",
            py={5}
            px={4}
            mt={4}
            lineHeight="1"
            size="md"
            width="auto"
            variant="link"
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
    </Flex>
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
