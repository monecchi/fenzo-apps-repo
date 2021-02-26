import React from 'react'
import {
  VStack,
  HStack,
  Link,
  Icon,
  IconButton,
  Heading,
  Wrap,
  SimpleGrid,
} from '@chakra-ui/react'

import FenzoLogoIcon from '../../assets/icons/fenzo-logo-icon.svg'

export const LogoIcon = (props) => {

  const { size, url } = props

  return (
    <React.Fragment>
      {url ? (
        <Link href={url}>
          <Icon as={FenzoLogoIcon} w={size} h={size} />
        </Link>
      ) : (
          <Icon as={FenzoLogoIcon} w={size} h={size}/>
      )}
    </React.Fragment>
  )
}
