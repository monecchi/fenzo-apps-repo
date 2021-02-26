import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export const Container = (props: BoxProps) => (
  <Box w="full" maxW="1366px" mx="auto" px={{ base: "6", md: "8", lg: "7" }} {...props} />
);

export default Container;
