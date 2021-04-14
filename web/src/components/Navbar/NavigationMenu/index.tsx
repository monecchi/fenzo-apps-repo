import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Box, Stack, Button, Icon as ChakraIcon, useColorModeValue } from '@chakra-ui/react'

// RestoPizza Icons set
import Icon from '../../Icon';

//
// Navbar Navigation Menu, set active links with useRouter()
// @see https://stackoverflow.com/a/64111892/1152876
//
export const NavbarNavigation = () => {

  const router = useRouter();

  return (
    <Stack direction="row" spacing={4} align="center">
      <Link href="/fenzo-sobre">
        <Button
          leftIcon={<Icon color="currentColor" size={24} icon="fenzo-logo-icon" />}
          color={useColorModeValue("gray.800", "gray.400")}
          fontWeight="400"
          bg="transparent"
          p="0"
          m="0 0 0 20px"
          minW="50px"
          _hover={{ color: useColorModeValue("blue.500", "gray.200"), bg: "none" }}
          _active={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          _focus={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          isActive={router.asPath == "/fenzo-sobre" ? true : false}
        >
          A Fenzo
        </Button>
      </Link>

      <Link href="/servicos">
        <Button
          leftIcon={<Icon color="currentColor" size={24} icon="log-in" />}
          color={useColorModeValue("gray.800", "gray.400")}
          fontWeight="400"
          bg="transparent"
          p="0"
          m="0 0 0 20px"
          minW="50px"
          _hover={{ color: useColorModeValue("blue.500", "gray.200"), bg: "none" }}
          _active={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          _focus={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          isActive={router.asPath == "/servicos" ? true : false}
        >
          Serviços
        </Button>
      </Link>

      <Link href="/contato">
        <Button
          leftIcon={<Icon color="currentColor" size={24} icon="mail" />}
          color={useColorModeValue("gray.800", "gray.400")}
          fontWeight="400"
          bg="transparent"
          p="0"
          m="0 0 0 20px"
          minW="50px"
          _hover={{ color: useColorModeValue("blue.500", "gray.200"), bg: "none" }}
          _active={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          _focus={{ color: useColorModeValue("blue.600", "white"), bg: "none" }}
          isActive={router.asPath == "/contato" ? true : false}
        >
          Contato
        </Button>
      </Link>
    </Stack>
  )
}

const NavbarNav = () => {
  return (
    <div className="responsive-header__wrapper-links">
      <Link href="/fenzo-sobre">
        <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Sobre" tabIndex={0}>
          <span className="icon-fenzo icon-fenzo--promotion btn__icon">
            <Icon color="currentColor" size={24} icon="fenzo-logo-icon" />
          </span>
          <span className="btn__label">A Fenzo</span>
        </a>
      </Link>

      <Link href="/servicos">
        <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Entrar" tabIndex={0} href="/servicos">
          <span className="icon-fenzo icon-fenzo--sign-in btn__icon">
            <Icon color="currentColor" size={24} icon="log-in" />
          </span>
          <span className="btn__label">Serviços</span>
        </a>
      </Link>

      <Link href="/contato">
        <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Contato" tabIndex={0} href="/contato">
          <span className="icon-fenzo icon-fenzo--contato btn__icon">
            <Icon color="currentColor" size={24} icon="mail" />
          </span>
          <span className="btn__label">Contato</span>
        </a>
      </Link>
    </div>
  )
}

export default NavbarNav;
