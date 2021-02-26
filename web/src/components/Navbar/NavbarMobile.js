import React, { useState } from "react";
import Link from 'next/link'
import {
  Flex,
  Spacer,
  Box,
  Center,
  HStack,
  Stack,
  Slide,
  Text,
  Heading,
  Button,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

import { Sun as SunIcon, List as HamburgerIcon, X as CloseIcon } from 'phosphor-react';

import Logo from '../../assets/logo/fenzo-logo-cor.svg'

import ThemeToggle from '../../components/ThemeToggle'

//import useOnClickOutside from '../../hooks/useOnClickOutside'

const NavbarMobile = (props) => {

  //const navRef = React.createRef
  //const mobileNavRef = React.useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen)
  }

  //useOnClickOutside(mobileNavRef, () => setIsMenuOpen(false));

  return (
    <Slide direction='top' in={props.isOpen} style={{ zIndex: 9997 }}>
      {/* =========== MAIN NAV - CONTAINER ============================= */}
      <Box
        as='header'
        width='100%'
        fontFamily='inherit'
        zIndex='10'
        bg={useColorModeValue("white", "blue.800")}
        boxShadow={useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 18%)", "0px 0.25rem 0.75rem 0px rgb(0 14 81 / 35%)")}
        roundedBottomRight={{ base: `${(!isMenuOpen) ? '0' : '2rem'}` }}
        className="navbar-mobile chakra-box-as-header"
      >
        {/* =========== MAIN NAV - CONTAINER ============================= */}
        <Flex
          flexDir={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }} // md: 'row'
          color='white'
          align='center'
          m='auto'
          p={{ base: `${(!isMenuOpen) ? '0 20px' : '0 20px 35px'}`, xl: '0' }}
          maxW='1366px'
          h={{ base: `${(!isMenuOpen) ? '80px' : 'auto'}` }}
          userSelect="none"
          className="chakra-flex navbar-mobile__container"
        >
          {/* =========== MAIN NAV - CONTAINER ============================= */}
          <Flex alignItems='center' w={{ base: '100%', md: '100%' }} justifyContent='space-between' className="chakra-flex">
            {/* =========== MAIN NAV lOGO CONTAINER ============================= */}
            <HStack spacing={3} className="chakra-stack" justify="flex-start">
              {/* =========== MAIN NAV - LOGO SVG ============================= */}
              <Box as='a' py={5} m={0}>
                <Logo style={{ width: 'auto', margin: '0', height: '35px', minHeight: '35px', maxHeight: "35px" }} />
              </Box>
            </HStack>
            {/* =========== MAIN NAV - MENU CLOSE ICON ============================= */}
            <IconButton
              aria-label='Open menu'
              display={{ base: 'flex', md: 'flex', lg: 'flex', xl: 'noone' }}
              color={(isMenuOpen) ? 'white' : 'blue.500'}
              variant='ghost'
              icon={(isMenuOpen) ? <CloseIcon size={36} /> : <HamburgerIcon size={36} />}
              bgColor={(isMenuOpen) ? 'blue.500' : 'white'}
              _hover={{ color: 'white', bgColor: 'blue.500' }}
              _active={{ bgColor: 'blue.500' }}
              onClick={handleMenuClick}
            />
          </Flex>
          {/* =========== MAIN NAV - SPACER ============================= */}
          <Spacer />
          {/* =========== MAIN NAV - LINKS CONTAINER ============================= */}
          <Stack
            spacing={{ base: 0, md: 0 }}
            display={{ base: `${(isMenuOpen) ? 'flex' : 'none'}`, md: `${(isMenuOpen) ? 'flex' : 'none'}` }}
            flexDir={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
            w={{ base: '100%', md: '100%' }}
            animation={{
              base: 'fadeIn .25s',
              md: 'none'
            }}
            className="chakra-stack navigation-items__container"
          >
          <Box height='100%' d={{ lg: 'none', xl: 'none'}}>
            <Text color='brand.blue' mb={'1.2rem'}>Serralheria forte, para durar ®</Text>
          </Box>
            {/* =========== MAIN NAV - HOME BTN CONTAINER ============================= */}
            <Box
              height='100%'
              borderBottom='1px'
              borderColor='gray.200'
              userSelect='none'
              //bgColor={{ base: 'green.400', md:'transparent' }}
              //_hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%',
                md: 'initial'
              }}
              //filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='2'
              justify='left'
              alignItems='center'
              animation={{
                base: `${(isMenuOpen) ? 'slideDown .35s ease-out' : 'none'}`,
                md: 'none'
              }}
            >
              {/* =========== MAIN NAV - HOME BTN ============================= */}
              <Heading
                fontSize='1.2rem'
                fontWeight='500'
                size='md'
                align='left'
              >
                <Link href='/'>
                  <Button variant='link' py={4} justifyContent='left' userSelect='none' colorScheme='blue' w='100%' onClick={handleMenuClick}>Início</Button>
                </Link>
              </Heading>
            </Box>
            {/* =========== MAIN NAV - SERVICES BTN CONTAINER ============================= */}
            <Box
              as='a'
              target='_blank'
              variant="link"
              cursor='pointer'
              height='100%'
              py={4}
              px={2}
              borderBottom='1px'
              borderColor='gray.200'
              userSelect='none'
              //bgColor={{ base: 'green.400', md:'transparent' }}
              //_hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%',
                md: 'initial'
              }}
              //filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='2'
              justify='flex-start'
              alignItems='center'
              animation={{
                base: `${(isMenuOpen) ? 'slideDown .35s ease-out' : 'none'}`,
                md: 'none'
              }}
            >
              {/* =========== MAIN NAV - SERVICES BTN ============================= */}
              <Heading
                fontSize='1.2rem'
                fontWeight='500'
                size='md'
                align='left'
              >
                <Link href='/servicos'>
                  <Button variant="link" colorScheme="blue" onClick={handleMenuClick}>Serviços</Button>
                </Link>
              </Heading>
            </Box>
            {/* =========== MAIN NAV - HOME BTN CONTAINER ============================= */}
            <Box
              as='a'
              target='_blank'
              variant="link"
              cursor='pointer'
              height='100%'
              py={4}
              px={2}
              borderBottom='1px'
              borderColor='gray.200'
              userSelect='none'
              //bgColor={{ base: 'green.400', md:'transparent' }}
              //_hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%',
                md: 'initial'
              }}
              //filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='2'
              justify='flex-start'
              alignItems='center'
              animation={{
                base: `${(isMenuOpen) ? 'slideDown .35s ease-out' : 'none'}`,
                md: 'none'
              }}
            >
              {/* =========== MAIN NAV - HOME BTN ============================= */}
              <Heading
                fontSize='1.2rem'
                fontWeight='500'
                size='md'
                align='left'
              >
                <Link href='/fenzo-sobre'>
                  <Button variant="link" colorScheme="blue" onClick={handleMenuClick}>Sobre a Fenzo</Button>
                </Link>
              </Heading>
            </Box>
            {/* =========== MAIN NAV  - CONTACT BTN CONTAINER ============================= */}
            <Box
              as='a'
              target='_blank'
              variant="link"
              cursor='pointer'
              height='100%'
              py={4}
              px={2}
              userSelect='none'
              //bgColor={{ base: 'green.400', md:'transparent' }}
              //_hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%',
                md: 'initial'
              }}
              //filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='2'
              justify='flex-start'
              alignItems='center'
              animation={{
                base: `${(isMenuOpen) ? 'slideDown .35s ease-out' : 'none'}`,
                md: 'none'
              }}
            >
              {/* =========== MAIN NAV  - CONTACT BTN ============================= */}
              <Heading
                fontSize='1.2rem'
                fontWeight='500'
                size='md'
                align='left'
              >
                <Link href='/contato'>
                  <Button variant="link" colorScheme="blue" onClick={handleMenuClick}>Contato e localização</Button>
                </Link>
              </Heading>
            </Box>
            <ThemeToggle mobile />
          </Stack>
        </Flex>
      </Box>
    </Slide>
  );
}

export default NavbarMobile;
