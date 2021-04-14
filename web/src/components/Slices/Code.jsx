import React from 'react'
import {
  Code as ChakraCode,
  Text,
  Button,
  useClipboard
} from '@chakra-ui/react'


//
// Really simple code syntax using chakra-ui
//

import { RichText } from 'prismic-reactjs'

const Code = ({ data: { primary } }) => {

  const { hasCopied, onCopy } = useClipboard(primary.code.text)

  return (
    <>
      <ChakraCode
        w="100%"
        p="3rem"
        colorScheme={primary.colorscheme}
        variant={primary.variant}
        borderRadius=".35rem"
        opacity={primary.opacity | 1}
      >
        <Text as="span" fontSize="sm" position="absolute" top="0" left="0">{primary.lang.toUpperCase()}</Text>
        <Button onClick={onCopy} ml={2} position="absolute" top="0" right="0" w="auto" h="24px">
          {hasCopied ? "Copiado" : "Copiar"}
        </Button>
        {RichText.asText(primary.code)}
      </ChakraCode>
    </>
  )
}

export default Code
