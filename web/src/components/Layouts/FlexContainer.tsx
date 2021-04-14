import { FlexProps, Flex } from '@chakra-ui/react'

export const FlexContainer = (props: FlexProps) => (
  <Flex
    w="100%"
    maxW="1366px"
    px="1.25rem"
    {...props}
  />
);

export default FlexContainer;
