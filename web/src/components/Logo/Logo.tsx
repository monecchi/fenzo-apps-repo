import Link from 'next/link'
import {
  Flex,
  Box,
  BoxProps,
  VStack,
  HStack,
  Stack,
  Text,
  Icon,
  Heading,
  Button,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

import FenzoLogoSimple from '../../assets/logo/fenzo-logo-cor.svg'

const Logo = () => {
  return (
    <div>Fenzo</div>
  )
}

export default Logo;

export const LogoSimple = (url: string, props: BoxProps) => {

  {
    url ? (
      <Link href={"/" || url}>
        <VStack>
          <Icon as={()=><FenzoLogoSimple />} w="auto" h="35px" maxH="35px" minH="35px" color={useColorModeValue("inherit", "white")} />
        </VStack >
      </Link>
    ) : (
        <>
          <VStack>
            <Icon as={()=><FenzoLogoSimple />} w="auto" h="35px" maxH="35px" minH="35px" color={useColorModeValue("inherit", "white")} />
          </VStack>
        </>
      )
  }

};
