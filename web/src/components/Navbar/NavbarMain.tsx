import React, { useState, useEffect } from 'react'
import {
  FlexProps,
  Flex,
  BoxProps,
  Box,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'

import { LogoSlogan } from '../../components/Logo/Logo'
import NavbarSearch from './Search/index'
import { NavbarNavigation } from './NavigationMenu/index'
import { NavbarPhone } from './Telephone/index'
import { SideDrawerIcon } from '../../components/Icon/IconsMixed'
import MenuSideDrawer from '../../components/MenuSideDrawer'
import ThemeToggle from '../../components/ThemeToggle'

//
// Main Navbar
//
const NavbarMain = (props: any, rest: BoxProps) => {

  const [visible, setVisible] = useState({
    show: true,
    scrollPos: 0
  })

  const logoColor = useColorModeValue("blue.500", "whiteAlpha.900")
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

  return (
    <>
    <Flex
      as="header"
      flexDirection="column"
      position="sticky"
      w="100%"
      h="80px"
      top="0"
      p="0"
      bg={navbarBgColor}
      borderBottom={navbarBorderColor}
      boxShadow={navbarShadow}
      zIndex="sticky"
      //className="header_responsive"
      className={visible.show ? "header_responsive active" : "header_responsive active scrolled"}
      {...props}
    >
      <Box
        d="flex"
        flexGrow={1}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="1366px"
        p="0"
        px="20px"
        m="0 auto"
        className="header_contents"
        {...rest}
      >
        <Box
          display="flex"
          className="header_responsive__logo"
        >

          <LogoSlogan
            href={"/"}
            cursor="pointer"
            color={logoColor}
            width="164px"
            maxW="164px"
          />
        </Box>

        {/* <NavSearchApi /> */}
        <NavbarSearch />
        <NavbarNavigation />
        <NavbarPhone telephone={'21 97646-8712'} phoneNumber={'976468712'} />
        <MenuSideDrawer bg={useColorModeValue("white", "fenzodark.800")} />
        {/* <IconButton color={useColorModeValue("blue.500", "white")} icon={<SideDrawerIcon width={26} height={26} />} aria-label="menu" /> */}
        <ThemeToggle mobile={false} />

      </Box>
      {props.children}
    </Flex>
    <style jsx global>
      {`
        .active {
          visibility: visible;
          transition: all 0.5s;
        }
        .scrolled {
          visibility: hidden;
          transition: all 0.5s;
          transform: translateY(-100%);
        }
      `}
    </style>
    </>
  )
};

export default NavbarMain;
