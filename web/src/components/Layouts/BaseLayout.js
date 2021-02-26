import React from 'react'
import PageTransition from '../../components/PageTransitions'
import { Flex, Box } from '@chakra-ui/react'

const BaseLayout = (props) => {
  return (
    <>
      <PageTransition>
        <Flex
          direction="column"
          alignItems="center"
          //m="0 auto"
          //mt={{ base: "0", sm: "80px", md: "80px", lg: "0" }}
          className="home-page"
          {...props}
        >

          <Box
            w="100%"
            m="0 auto"
          >
            {props.children}
          </Box>
        </Flex>
      </PageTransition>
    </>
  )
}

export default BaseLayout;
