import React, { useState, useEffect, useRef, useCallback } from "react";
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

import useOnClickOutside from '../../hooks/useOnClickOutside'

import { Sun as SunIcon, List as HamburgerIcon, X as CloseIcon } from 'phosphor-react';

import Logo from '../../assets/logo/fenzo-logo-cor.svg'
import { LogoSimple } from '../../components/Logo/Logo'

import ThemeToggle from '../../components/ThemeToggle'


const NavbarMobile = (props) => {

  const { isOpen } = props
  const navRef = useRef(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [visible, setVisible] = useState({
    show: true,
    scrollPos: 0
  })

  const toggleIconColor = useColorModeValue("blue.500", "white")
  const navbarBgColor = useColorModeValue("white", "fenzodark.700")
  const navbarBorderColor = useColorModeValue("1px solid #f1f4f8", "1px solid fenzodark.600")
  const navbarShadow = useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 18%)", "0px 0.25rem 0.75rem 0px rgb(0 0 30 / 35%)")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    //console.log(document.body.getBoundingClientRect());
    setVisible({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top + 380 > visible.scrollPos
    });
    //console.log('is visible: ' + visible.show);
  };

  const handleMenuClick = useCallback(
    () => {
      setIsMenuOpen(isMenuOpen => !isMenuOpen)
    },
    [isMenuOpen],
  )

  useOnClickOutside(navRef, () => handleClickOutside)

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')
    setIsMenuOpen(false)
  }

  return (
    <>
      <Box
        direction='top'
        w="100%"
        top='0'
        style={{ position: !isMenuOpen ? 'sticky' : 'fixed', zIndex: 1100 }}
        className={visible.show ? "active" : "active scrolled"}
      >
        {/* =========== MAIN NAV - CONTAINER ============================= */}
        <Box
          as='header'
          width='100%'
          height='100%'
          fontFamily='inherit'
          zIndex='10'
          bg={navbarBgColor}
          boxShadow={navbarShadow}
          roundedBottomRight={{ base: `${(!isMenuOpen) ? '0' : '2rem'}` }}
          className="navbar-mobile chakra-box-as-header"
        >
          {/* =========== MAIN NAV - CONTAINER ============================= */}
          <Flex
            flexDir={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }} // md: 'row'
            color='white'
            align='center'
            m='auto'
            p={{ base: `${(!isMenuOpen) ? '0 20px' : '0 1.25rem 35px'}`, xl: '0' }}
            maxW='1366px'
            h={{ base: `${(!isMenuOpen) ? '70px' : 'auto'}` }}
            userSelect="none"
            className="chakra-flex navbar-mobile__container"
          >
            {/* =========== MAIN NAV - CONTAINER ============================= */}
            <Flex alignItems='center' w={{ base: '100%', md: '100%' }} justifyContent='space-between' className="chakra-flex">
              <HStack spacing={3} className="chakra-stack" justify="flex-start">
                <Box as='a' py={5} m={0}>
                  <LogoSimple url="/" display="flex" alignItems="center" width="160px" maxW="160px" />
                  {/* <Logo style={{ width: 'auto', margin: '0', height: '35px', minHeight: '35px', maxHeight: "35px" }} /> */}
                </Box>
              </HStack>
              <IconButton
                variant="ghost"
                display={{ base: 'flex', md: 'flex', lg: 'flex', xl: 'noone' }}
                color={toggleIconColor}
                icon={isMenuOpen ? (<CloseIcon size={36} />) : (<HamburgerIcon size={36} />)}
                aria-label='Open menu'
                onClick={handleMenuClick}
              />
            </Flex>

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
              <Box height='100%' d={{ lg: 'none', xl: 'none' }}>
                <Text color='brand.blue' mb={'1.2rem'}>Serralheria forte, para durar ®</Text>
              </Box>
              {/* =========== MAIN NAV - HOME BTN CONTAINER ============================= */}
              <Box
                height='100%'
                borderBottom='1px'
                borderColor='gray.200'
                userSelect='none'
                w={{
                  base: '100%',
                  md: 'initial'
                }}
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
                w={{
                  base: '100%',
                  md: 'initial'
                }}
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
                w={{
                  base: '100%',
                  md: 'initial'
                }}
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
                w={{
                  base: '100%',
                  md: 'initial'
                }}
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

        {/* clickOutside trigger */}
        <Box
          position="relative"
          display={isMenuOpen ? "block" : "none"}
          bg="white"
          w="100%"
          h="100vh"
          top="0"
          opacity="0"
          className="click-overlay"
          ref={navRef}
          onClick={handleClickOutside}
        />
      </Box>
    </>
  );
}

export default NavbarMobile;
