import PropTypes from 'prop-types'
import { nextPrismicLoader } from '../../constants'
//import Image from 'next/image'
import Image from '../../components/Image' // custom chakra-ui `next-image` component
import { RichText } from 'prismic-reactjs'
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'

const MetaInfo = ({ meta }) => {
  return (
    <div>
      <Flex
        justify='space-between'
        align='center'
        w='100%'
        p={4}
        my={8}
        bg='white'
        borderWidth='1px'
        borderColor="gray.200"
        rounded='.35rem'
        boxShadow='lg'
        className='article-metabox'
      >
        <Box
          position='relative'
          px={2}
        >
          <Heading as='h5' fontSize='h5'>
            {RichText.asText(meta.website_title)}
          </Heading>
          <Text>{RichText.asText(meta.website_description)}</Text>
          <Link
            href={meta.website_url}
            color='blue.500'
            target='_blank'
            rel='noopener noreferrer'
            isExternal
          >
            {meta.website_url}
          </Link>
        </Box>
        <Box
          position='relative'
          className='metabox-img'
        >
          <Image
            loader={nextPrismicLoader}
            src={meta.website_image.url}
            alt={meta.website_image.alt}
            title={meta.website_image.alt}
            layout='fixed'
            width='200px'
            height='100px'
            objectFit='cover'
            className='meta-image'
            css={{ borderRadius: '.25rem' }}
          />
        </Box>
      </Flex>
      <style jsx global>
        {`
          @media screen and (max-width:768px) {
            .article-metabox {
                flex-flow: row wrap;
            }
            .metabox-img {
                margin-top: 1rem;
            }
          }
        `}
      </style>
    </div>
  )
}

MetaInfo.defaultProps = {
  meta: {
    website_title: '',
    website_image: {
      alt: '',
      fluid: null,
      url: '',
    },
    website_description: '',
    website_url: '',
  },
}

MetaInfo.propTypes = {
  meta: PropTypes.object,
}

export default MetaInfo
