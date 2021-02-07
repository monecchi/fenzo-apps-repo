import React from 'react'
import Link from 'next/link'
import { useSettings } from '../../hooks/useSettings' // hook

import {
  chakra,
  useColorModeValue,
  HStack,
  VStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon as ChakraIcon,
} from '@chakra-ui/react'

import Icon from '../Icon'
//import TelephoneIcon from '../../assets/icons/telephone.svg'
import { PhoneCall, WhatsappLogo } from 'phosphor-react'

//
// Call Action Component
//
const CallActionMenu = (props) => {

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
       { settings[0].telephone.formatted || '21 97646-8712' }
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

export default CallActionMenu;
