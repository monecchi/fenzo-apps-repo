import {RichText} from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { Quotes as QuotesIcon } from 'phosphor-react'

const Quote = ({data: {primary}}) => {
  return (
    <Box
      as="blockquote"
      position="relative"
      p="3rem"
      my={2}
      borderRadius=".625rem"
      color={useColorModeValue("fenzodark.400", "whiteAlpha700")}
      bg={useColorModeValue("subtleblue.50", "fenzodark.600")}
    >
      {/* Quote */}
      <Box position='relative' zIndex={1}>
        <Heading as="h5" fontSize="h5" mb="0" lineHeight="1.5">{RichText.asText(primary.content)}</Heading>
      </Box>

      {/* Quote Icon */}
      <Box
        as='span'
        position='absolute'
        top='.7rem'
        left='1rem'
        zIndex={0}
        sx={{ color: useColorModeValue("blue.50", "fenzodark.400") }}
      >
        <QuotesIcon size="3.8rem" weight="fill" color="currentColor" />
      </Box>

    </Box>
  )
}

export default Quote
