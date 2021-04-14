import {
  Box,
  Text
} from '@chakra-ui/react'

const Caption = ({ name, type }) => {
  return (
    <Box align="center">
      <Text
        textAlign="center"
        mt={0}
      >
        {type === 'articles' ? (
          <Text as="cite">
            Quer renovar a sua casa com esquadrias de alumínio? A Fenzo oferece serviços de fabricação de portões, portas e janelas com alto padrão de qualidade.
          </Text>
        ) : (
          <Text as="cite">
            Artigos relacionados com <strong>{name}</strong> {type}.
          </Text>
        )}
      </Text>
    </Box>
  )
}

export default Caption
