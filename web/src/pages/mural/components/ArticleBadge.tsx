/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import { default as NextLink } from 'next/link'
import { hrefResolver, linkResolver } from '../../../../prismic-configuration'
import { Box, Text, Badge } from '@chakra-ui/react'
//import {trackGAEvent} from '../utils/googleAnalytics'

/**
 * @param {String} slug (ID)
 * @param {String} type (category | tag)
 * @param {String} page (fontSize will be small on listing page compared to article page)
 */

const docType = 'post' // article || post

const ArticleBadge = ({name, slug, type, page = docType }) => {
  return (
    <Badge sx={{m: 1}}>
      <NextLink
        href={hrefResolver({type, uid: slug})}
        as={linkResolver({type, uid: slug})}
        passHref>
        <Box
          as="a"
          sx={{
            textDecoration: 'none',
            color: 'muted',
            backgroundColor: 'accent',
            fontSize: page === docType ? [0, 1, 2] : [0],
            py: 1,
            px: 3,
            borderRadius: '2rem',
            cursor: 'pointer',
            '&:hover': {
              color: 'accent',
              backgroundColor: 'muted',
            },
          }}
          // onClick={() =>
          //   trackGAEvent(page, `clicked on ${name} ${type}`, 'chip click')
          // }
          rel='noreferrer noopener'>
          {name}
        </Box>
      </NextLink>
    </Badge>
  )
}

ArticleBadge.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
}

export default ArticleBadge;
