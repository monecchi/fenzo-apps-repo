import React from 'react'
import PropTypes from 'prop-types'
import { hrefResolver, linkResolver } from '../../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'
import {
  Box,
  Heading,
  IconButton,
  Avatar
} from '@chakra-ui/react'
//import Image from 'next-image'
import { Rows } from 'phosphor-react'


//
// Latest Articles Simple List
//
const LatestArticles = ({ articles }) => {

  return (
    <Box mb={8}>
      <Box
        as="h6"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize="h6"
        mb={6}
      >
        Artigos do Blog
        <NextLink href="/mural" aria-label="Mais no Blog" replace>
          <IconButton icon={<Rows size={26} weight="duotone" color="currentColor" />} color="blue.500" label="mais no Blog" />
        </NextLink>
      </Box>
      { articles && articles.map((article) => (
        <Box
          w="100%"
          m="0 auto"
          key={article.uid}
        >
          <Box as="article" mb={5}>
            <Box display="flex" justifyContent="flex-start" alignItems="center" color="inherit">
              <Box className="avatar avatar-lg mr-3" mr={3}>
                <Avatar
                  position="relative"
                  display="inline-block"
                  size="lg"
                  name={RichText.asText(article.data.title)}
                  src={article.data.article_image.url}
                  borderRadius=".35rem"
                />
              </Box>
              <Box flex={1} className="media-body">
                <Heading as="h6" fontSize="1rem">
                  <NextLink
                    href={hrefResolver(article)}
                    as={linkResolver(article)}
                    passHref>
                    <Box
                      as="a"
                      color="inherit"
                      _hover={{ color: "blue.500" }}
                      rel='noreferrer noopener'
                    >
                      {RichText.asText(article.data.title)}
                    </Box>
                  </NextLink>
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

LatestArticles.propTypes = {
  articles: PropTypes.array,
}

export default LatestArticles;
