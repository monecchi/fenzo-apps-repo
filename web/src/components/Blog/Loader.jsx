import { VStack, Box, Spinner } from '@chakra-ui/react'
const Loader = () => {
  return (
    <VStack
      w='100%'
      maxW='1366px'
      m='0 auto'
      py={8}
      className='fenzo-spinner'
    >
      <Spinner color="blue.500" />
    </VStack>
  )
}

export default Loader
