import React from 'react'
import { Flex, Box, Grid, GridItem, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const SectionHeading = ({title, subtitle, ...rest}) => {
  return (
    <>
      <Flex
        w="100%"
        maxW="1366px"
        p={{ base: "20px 0 20px 0" }}
        direction="row" // flexDirection
        justify="left" // justifyContent
        align="center" // alignItems
        {...rest}
      >
      <Box d="flex" w="100%" justifyContent={{ base: "space-between" }}>
        {title && (
          <Heading
            as="h5"
            fontSize="1.25rem"
            color={useColorModeValue("gray.800", "white")}
            className="tight-text"
          >
            {title}
            {subtitle && (<Text color={useColorModeValue("gray.500", "whiteAlpha.500")} fontSize="1rem" fontWeight="400" mt="0.35rem" lineHeight="1">{subtitle}</Text>)}
          </Heading>
        )}
        {rest.children}
      </Box>
      </Flex>
    </>
  )
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

SectionHeading.defaultProps = {
  title: "Defina o atributo title",
  subtitle: ""
}

export default SectionHeading;