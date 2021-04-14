import Link from 'next/link'
import { useSettings } from '../../hooks/useSettings' // hook

import {
  HStack,
  Box,
  Button,
  Text,
  Menu,
  MenuButtonProps,
  MenuButton,
  MenuList,
  MenuItem,
  Icon as ChakraIcon,
  useColorModeValue
} from '@chakra-ui/react'

import Icon from '../Icon'
//import TelephoneIcon from '../../assets/icons/telephone.svg'
import { PhoneCall, WhatsappLogo } from 'phosphor-react'

//
// Call Action Component
//
const CallActionMenu = (props: MenuButtonProps) => {

  const { settings, isError } = useSettings()

  const menuButtonIconColor = useColorModeValue("blue.500", "subtleblue.500")
  const menuButtonTextColor = useColorModeValue("blue.700", "whiteAlpha.900")
  const menuListBgColor = useColorModeValue("white", "fenzodark.700")
  const menuItemColor = useColorModeValue("fenzodark.400", "whiteAlpha.800")

  if (!settings) {
    return (
      <Box>carregando...</Box>
    )
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        color={menuButtonTextColor}
        size="lg"
        fontSize={32}
        px={4}
        borderRadius="4px"
        leftIcon={<ChakraIcon as={PhoneCall} size={18} color={menuButtonIconColor} />}
        {...props}
      >
       { settings[0].telephone.formatted || '21 97646-8712' }
      </MenuButton>
      <MenuList w="18rem" bg={menuListBgColor}>
        <Link href={`tel:${settings[0].telephone.only_number}`}>
          <MenuItem color={menuItemColor} minH="2.5rem">
            <HStack >
              <Icon
                icon="phone-call"
                size="1.2rem"
                color='currentColor'
              />
              <Text color={menuItemColor}>Ligar</Text>
            </HStack>
          </MenuItem>
        </Link>
        <Link href={`tel:${settings[0].telephone.whatsapp}`}>
          <MenuItem color={menuItemColor} minH="2.5rem">
            <HStack>
              <ChakraIcon
                as={WhatsappLogo}
                color={menuItemColor}
                size={"1.25rem"}
                width={"1.25rem"}
                height={"1.253rem"}
              />
              <Text color={menuItemColor}>WhatsApp</Text>
            </HStack>
          </MenuItem>
        </Link>
        <Link href="/contato">
          <MenuItem color={menuItemColor} minH="2.5rem">
            <HStack>
              <Icon
                icon="file-text"
                size="1.2rem"
                color='currentColor'
              />
              <Text color={menuItemColor}>Mensagem</Text>
            </HStack>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default CallActionMenu;
