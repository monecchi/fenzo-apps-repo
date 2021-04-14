import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'
import {
  Flex,
  Box,
  Stack,
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Alert = ({ data: { primary } }) => {
  return (
    <Stack spacing={3}>
      <ChakraAlert py={4} my={2} borderRadius='.25rem' status={`${primary.type}`}>
        <AlertIcon />
        <RichText render={primary.content} htmlSerializer={htmlSerializer} />
      </ChakraAlert>
    </Stack>
  )
}

export default Alert
