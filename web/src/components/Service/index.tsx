import React from 'react'
import Link from 'next/link'
import {
  Box,
  LinkBox,
  LinkOverlay,
  IconProps,
  Icon as ChakraIcon,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

// RestoPizza Icons set
import Icon from '../Icon';

//import styles from './service.module.scss'

//
// Service Single Component (small card)
//

// https://chakra-ui.com/docs/navigation/link-overlay

export const FenzoIcon = ({ icon, color }, ...rest) => {
  return (
    <ChakraIcon as={() => icon} />
  )
}

export default function Service({ project }) {

  const { colorMode } = useColorMode()
  const icoColor = colorMode === "light" ? "blue.500" : "#313e6f"
  const iconColor = useColorModeValue("blue.500", "#313e6f")

  return (
    <>
      <Link href="/servico/[pid]" as={`/servico/${project.slug}`}>
        <LinkBox
          color={useColorModeValue("blue.500", "rgb(197 206 236 / 85%)")}
          bg={useColorModeValue("gray.100", "fenzodark.700")}
          p="1.2rem"
          borderRadius="4px"
          className="service-minibox"
          minW="200px"
        >
          <LinkOverlay
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box mr=".75rem" color={icoColor}>
              <Icon size={36} icon={project.icon_name} color="currentColor" className="service-icon" style={{ marginLeft: "1px" }} />
            </Box>

            <Text fontSize=".95rem" color={useColorModeValue("blue.500", "blue.100")} lineHeight={1}>
              {project.title}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </Link>
    </>
  )
};
