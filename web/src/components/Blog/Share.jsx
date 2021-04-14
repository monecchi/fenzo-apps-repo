/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import SocialIcon from './Icon'
import { Share as ShareIcon, ShareNetwork } from 'phosphor-react'
import siteUrl from '../../utils/siteUrl'

const Share = ({ articleURL, articleName, hideShareText = false }) => {
  const URL = siteUrl(articleURL)
  const sharePlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${URL}`,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${articleName}&url=${URL}`,
    },
    {
      name: 'LinkedIn',
      url: `http://www.linkedin.com/shareArticle?url=${URL}`, // https://www.linkedin.com/sharing/share-offsite/
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${articleName} ${URL}`)}`,
    },
  ]

  return (
    <Box
      bg={useColorModeValue("whiteAlpha.700", "rgb(63 66 84 / 50%)")}
      borderRadius='.25rem'
      className='share-wrapper'
    >
      {hideShareText ? null : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={21}
        >
          <Heading as="h5" fontSize="h5" mb={0} mr={2}>Compartilhar</Heading>
          <Box
            as="span"
            color={useColorModeValue("fenzodark.600", "whiteAlpha")}
          >
            <ShareNetwork
              size={26}
              color="currentColor"
              weight="duotone"
            />
          </Box>
        </Box>
      )}
      <Flex
        d='flex'
        justify='center'
        align='center'
        flexFlow='row wrap'
      >
        {sharePlatforms.map((platform, index) => {
          return (
            <SocialIcon
              name={platform.name}
              url={platform.url}
              style={{
                color: "fenzodark.400",
                fontSize: '.85rem',
                marginLeft: '.5rem',
                marginRight: '.5rem'
              }}
              key={index}
            />
          )
        })}
      </Flex>
    </Box>
  )
}

Share.propTypes = {
  articleURL: PropTypes.string,
  articleName: PropTypes.string,
  hideShareText: PropTypes.bool,
}

export default Share
