import React from 'react'
import { Box, SlideFade } from '@chakra-ui/react'

const PageTransition = ({ children }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export const PageTransitionAos = ({ children }) => {
  return (
    <Box
      w="100%"
      m="0 auto"
      data-aos="fade-up"
      data-aos-delay={100}
      data-aos-duration="500"
      data-aos-anchor-placement="top-center"
    >
      {children}
    </Box>
  )
};

export default PageTransition;
