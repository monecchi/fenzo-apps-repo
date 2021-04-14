import React from 'react'
import PropTypes from 'prop-types'
import FlexContainer from '../../components/Layouts/FlexContainer'
import { Flex, Box, Grid, GridItem, Text, Heading, useColorModeValue } from '@chakra-ui/react'


const SectionHeading = ({title, ...rest}) => {
  const { subtitle } = rest
  return (
    <>
      <FlexContainer
        w="100%"
        maxW="1366px"
        m="0 auto"
        mt={{ base: "3rem", sm: "2.25rem", md: "2.25rem", lg: "3rem" }}
        mb="0"
        direction="row" // flexDirection
        justify="left" // justifyContent
        align="center" // alignItems
        {...rest}
      >
      <Box d="flex" w="100%" justifyContent={{ base: "space-between" }}>
        {title && (
          <Heading
            as="h5"
            fontSize="1.16rem"
            className="tight-text"
            mb="0"
          >
            {title}
            {subtitle && (<Text color={useColorModeValue("gray.500", "whiteAlpha.500")} fontSize="1rem" fontWeight="400" mt="0.35rem" lineHeight="1" mb="0">{subtitle}</Text>)}
          </Heading>
        )}
        {rest.children}
      </Box>
      </FlexContainer>
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