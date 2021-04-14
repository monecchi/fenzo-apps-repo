import React from 'react'
import PropTypes from 'prop-types'
import { default as NextLink } from 'next/link'
import {
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  useColorModeValue
} from '@chakra-ui/react'
import { hrefResolver, linkResolver } from '../../../prismic-configuration'
//import {trackGAEvent} from '../utils/googleAnalytics'

/**
 * @param {String} slug (ID)
 * @param {String} type (category | tag)
 * @param {String} page (fontSize will be small on listing page compared to article page)
 */
const Chip = ({ name, slug, type, page = 'article' }) => {
  return (
    <>
      <HStack spacing={4} m={1}>
        <NextLink
          href={hrefResolver({ type, uid: slug })}
          as={linkResolver({ type, uid: slug })}
          passHref>
          <Tag size="md" variant="solid" colorScheme={useColorModeValue("blue", "gray.800")} borderRadius="full">
            {name}
          </Tag>
        </NextLink>
      </HStack>
    </>
  )
}

Chip.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
}

export default Chip
