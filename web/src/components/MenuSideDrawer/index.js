import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Heading,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'

import { SideDrawerIcon } from '../../components/Icon/IconsMixed'

import useFetch from '../../hooks/useFetch'

import LatestArticles from '../../components/Blog/LatestArticles'
import NewsletterSimple from '../../components/NewsLetter'

//
// Side Drawer
//
const MenuSideDrawer = (props) => {

  const router = useRouter()

  const { data: articles, error } = useFetch('/api/articles?type=post&perpage=3', { refreshInterval: 1000 })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  //const articles = data

  // Close the Drawer when route starts to change
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? 'with' : 'without'
      //   } shallow routing`
      // )
      onClose()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <IconButton
        color={useColorModeValue("blue.500", "white")}
        icon={<SideDrawerIcon width={26} height={26} />} aria-label="menu"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        //size="sm"
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
        {...props}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Heading as="h5" fontSize="h5">Mais da Fenzo</Heading>
            </DrawerHeader>

            <DrawerBody>
              <VStack
                w="100%"
                spacing={8}
              >
                <Box w="100%">
                  <LatestArticles articles={articles} />
                </Box>

                <NewsletterSimple />

                {props.children}

              </VStack>
            </DrawerBody>

            <DrawerFooter justifyContent="center" alignItems="center">
              <Box w="100%" fontSize="sm" textAlign="center">© 2021 Fenzo Serralheria.</Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MenuSideDrawer;
