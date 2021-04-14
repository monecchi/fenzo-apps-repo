import PropTypes from 'prop-types'
import { Box, AspectRatio } from '@chakra-ui/react'

const Embed = ({ data: { primary } }) => {
  {
    if (primary.type === 'AlternateService') {
      return (
        <Box>{primary.embed_url} | {primary.embed_title}</Box>
      )
    }
    return (
      <AspectRatio maxW={primary.embed_maxwidth} ratio={primary.aspect_ratio}>
        <iframe
          title={primary.embed_title}
          src={primary.embed_url}
          allowFullScreen
        />
      </AspectRatio>
    )
  }
}

Embed.defaultProps = {
  data: {
    primary: {
      type: 'Default',
      embed_title: '',
      embed_url: '',
    },
  },
}

Embed.propTypes = {
  data: PropTypes.object,
}

export default Embed
