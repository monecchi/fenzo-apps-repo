import PropTypes from 'prop-types'
import { nextPrismicLoader } from '../../constants'
//import Image from 'next/image'
import Image from '../Image' // custom chakra-ui 'next/image' component
import { Box, Text } from '@chakra-ui/react'

const Banner = ({ image: { alt, url, dimensions } }) => {
  return (
    <Box
      pb={2}
      my={4}
      mx={"auto"}
      borderRadius=".65rem"
      overflow="hidden"
    >
      <Image
        loader={nextPrismicLoader}
        src={url}
        alt={alt}
        title={alt}
        layout='responsive'
        width={dimensions.width}
        height={dimensions.height}
      />

      <Text
        textAlign="center"
        pt={2}
        m="0 auto"
        fontSize="md"
      >
        {alt}
      </Text>
    </Box>
  )
}

Banner.defaultProps = {
  image: {
    alt: '',
    url: '',
    dimensions: {
      width: 0,
      height: 0,
    },
  },
}

Banner.propTypes = {
  image: PropTypes.object,
}

export default Banner
