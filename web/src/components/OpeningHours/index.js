import React, { Component, useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from "prop-types"
import { useSettings } from '../../hooks/useSettings' // hook

import {
  chakra,
  useColorModeValue,
  HStack,
  VStack,
  Box,
  Badge,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Skeleton,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon as ChakraIcon,
} from '@chakra-ui/react'

import businessHours from 'business-hours.js'

import Icon from '../Icon'
import TelephoneIcon from '../../assets/icons/telephone.svg'
import { PhoneCall, WhatsappLogo, Circle } from 'phosphor-react'


//
// Store (open/closed) badge
//
export const OpenClosedBadge = ({ isOpen }) => {
  const isOpenLabel = isOpen !== false || isOpen !== "undefined" ? "Aberto agora" : "Fechado agora"
  return (
    <Box display="flex" direction="column" maxW="80%" mb="1.2rem">
      <Badge variant="subtle" colorScheme="green" fontSize="md" rounded="4px" p="0.35rem" display="flex" justifyContent="center" alignItems="center" textTransform="unset">
        <Circle weight="fill" style={{ marginRight: ".45rem" }} /> { isOpenLabel }
      </Badge>
    </Box>
  )
}

export const BusinessHours = () => {

  const { settings, isError } = useSettings()

  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  const today = new Date();
  console.log(today)

  const day = today.getDay();
  console.log(day)

  const weekday = new Date(today).toLocaleString('pt-BR', { weekday: 'long' })
  console.log(weekday)

  if (!settings) {
    return (
      <>
        <Stack mb="1.5rem">
          <Skeleton height="20px" maxW="80%" />
          <Skeleton height="20px" maxW="80%" />
          <Skeleton height="20px" maxW="80%" />
        </Stack>
      </>
    )
  }

  const openingHours = settings[0].business_hours;

  // set up businessHours from library
  //const bizHoursJson = JSON.stringify(openingHours)
  //console.log(bizHoursJson);
  //console.log(opHours)

  // useEffect(() => {
  //   businessHours.init(bizHoursJson);
  // }, [])

  return (
    <>
      <Box display="flex" direction="column" maxW="80%" mb="1.2rem">
        <Badge variant="subtle" colorScheme="green" fontSize="1rem" fontWeight="600" rounded="4px" py="0.35rem" px="0.75rem" display="flex" justifyContent="center" alignItems="center" textTransform="none">
          <Circle weight="fill" style={{marginRight: ".45rem"}}>
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.2s"
              repeatCount="indefinite"
            >
            </animate>
          </Circle> Aberto agora

        </Badge>
      </Box>
      <Collapse startingHeight={0} in={show}>
        <Stack>
          {
            openingHours && openingHours.map((hour, index) => {
              //const week_day = hour.day.name
              return (
                <Box display="flex" direction="column" maxW="80%" key={index}>
                  <Badge color="#1652f0" bg="#dfe6ff" fontSize="sm" fontWeight="600" mr="0.75rem" minW="50px" key={hour.day.label}>
                    {hour.day.name_abrev}
                  </Badge>
                  <Text align="right" key={hour.id}>{ hour.day.open ? hour.day.opens + 'h ' + ' — ' + hour.day.closes + 'h' : "Fechado"}</Text>
                </Box>
              )
            })
          }
        </Stack>
      </Collapse>
      <Button size="sm" variant="link" color="blue.500" onClick={handleToggle} mt="1rem" _focus={{ boxShadow: "none "}}>
        Mostrar {show ? "Menos" : "horários"}
      </Button>
    </>
  )
}


//
// Call Action Component
//
const OpeningHoursList = (props) => {

  const themeTextColor = useColorModeValue("#4a4b65", "#EFF2F5")

  const { settings, isError } = useSettings()

  if (!settings) {
    return (
      <div>carregando...</div>
    )
  }

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="primary"
          color="brand.dark_blue"
          variant="ghost"
          size="lg"
          fontSize={32}
          px={4}
          borderRadius="4px"
          leftIcon={<ChakraIcon as={PhoneCall} size={18} color="brand.blue" fill="#0033FF" />}
          _active={{ bg: "blue.50" }}
        >
          {settings[0].telephone.formatted || '21 97646-8712'}
        </MenuButton>
        <MenuList w="18rem" colorScheme="gray">
          <Link href={`tel:${settings[0].telephone.only_number}`}>
            <MenuItem minH="2.5rem">
              <HStack>
                <Icon
                  icon="phone-call"
                  size={18}
                  color={themeTextColor}
                />
                <Text color={themeTextColor}>Ligar</Text>
              </HStack>
            </MenuItem>
          </Link>
          <Link href={`tel:${settings[0].telephone.whatsapp}`}>
            <MenuItem minH="2.5rem">
              <HStack>
                <ChakraIcon
                  as={WhatsappLogo}
                  size={"1.3rem"}
                  color={themeTextColor}
                  width={"1.3rem"}
                  height={"1.3rem"}
                />
                <Text color={themeTextColor}>WhatsApp</Text>
              </HStack>
            </MenuItem>
          </Link>
          <Link href="/contato">
            <MenuItem minH="2.5rem">
              <HStack>
                <Icon
                  icon="file-text"
                  size={18}
                  color={themeTextColor}
                />
                <Text color={themeTextColor}>Mensagem</Text>
              </HStack>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  )
}

export default OpeningHoursList;
