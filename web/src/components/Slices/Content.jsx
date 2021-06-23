import {RichText} from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'
import { Flex, Box } from '@chakra-ui/react'

const Content = ({data: {primary}}) => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      maxW="1366px"
      m="0 auto"
      mt={4}
      sx={{variant: 'styles'}}
    >
      <Box
        w="100%"
        maxW="1140px"
        m="0 auto"
      >
        <RichText render={primary.content} htmlSerializer={htmlSerializer} key={primary.uid} />
      </Box>
    </Flex>
  )
}

export default Content
