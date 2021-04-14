import PropTypes from 'prop-types'
import SocialIcon from './Icon'
import {
  Flex,
  Box,
  Stack,
  Avatar,
  AvatarBadge,
  Heading,
  Icon as ChakraIcon,
  useColorModeValue
} from '@chakra-ui/react'
import { nextPrismicLoader } from '../../constants'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
//import { linkResolver } from '../../../prismic-configuration'
import htmlSerializer from '../../utils/htmlSerializer'


const Author = ({ author }) => {
  return (
    <Box
      display='grid'
      gridTemplateColumns='100px 1fr'
      gridTemplateRows='auto'
      gridGap='1rem'
      my={8}
      p={4}
      borderWidth='1px'
      borderColor={useColorModeValue("fenzodark.200", "whiteAlpha700")}
      borderRadius='.65rem'
    >
      <Stack direction="row">
        <Avatar
          bg='blue.50'
          src={author.avatar.url}
          size='lg'
          className='author-avatar'
        />
      </Stack>
      <Box>
        <Box fontSize='sm' mb='0.45rem'>Artigo por:</Box>
        <Heading
          as='h5'
          fontSize='xxl'
          mt={0}
          mb={1}
        >
          {author.name}
        </Heading>
        <RichText render={author.bio} htmlSerializer={htmlSerializer} />
        <Flex
          display='flex'
          justify='start'
          align='start'
          flexFlow='row wrap'
          mt={-1}
        >
          {author.social_links.map((platform, index) => {
            return (
              <Box key={index} mx={2} my={1}>
                <SocialIcon
                  name={platform.platform_name}
                  url={platform.platform_url}
                />
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}

Author.propTypes = {
  author: PropTypes.object,
}

export default Author
