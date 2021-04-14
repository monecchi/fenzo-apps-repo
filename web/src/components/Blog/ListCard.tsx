import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { hrefResolver, linkResolver } from '../../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'
import formatDate, { formatDateShort } from '../../utils/formatDate'
import {
  Box,
  HStack,
  VStack,
  Text,
  Tag,
  TagLabel,
  TagRightIcon,
  useColorModeValue
} from '@chakra-ui/react';
import Image from '../Image'; // Custom ChakraImage component wrapping `next-image` Image component
import { usePalette } from 'react-palette';
import { Clock } from 'phosphor-react'


/**
 * Truncate the excerpt text based on character count
 * @param {String} text
 */
const truncateText = (text) => {
  if (text.length > 75) {
    return text.slice(0, 75).concat('...')
  }
  return text
}

const prismicLoader = ({ src, width, quality }) => {
  return `${src}&w=${width}&q=${quality || 75}`
}

//
// Blog Article List Card
//
const ListCard = ({ articles }) => {

  const { data, loading, error } = usePalette(articles[0].data.article_image.url);

  const publishedDate = articles[0].data.created

  const [articleDate, setArticleDate] = useState(null)

  useEffect(() => {
    setArticleDate(formatDateShort(publishedDate))
  }, [articleDate])

  return (
    <>
      { articles && articles.map((article: any) => (
        <Box key={article.uid} w="100%">
          <NextLink
            href={hrefResolver(article)}
            as={linkResolver(article)}
            passHref>
            <Box
              as="a"
              rel='noreferrer noopener'
            >
              <HStack
                p={4}
                bg={useColorModeValue("white", "fenzodark.700")}
                rounded="md"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.100", "fenzodark.600")}
                w="100%"
                textAlign="left"
                align="start"
                spacing={8}
                transition="all 0.25s"
                transition-timing-function="spring(1 100 10 10)"
                _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
              >
                <Box
                  rounded="lg"
                  p={2}
                  position="relative"
                  overflow="visible"
                  lineHeight={0}
                  boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                >
                  <Box
                    bg={data.lightVibrant}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    opacity={0.25}
                    rounded="lg"
                  />
                  <Image
                    loader={prismicLoader}
                    src={article.data.article_image.url}
                    height={96}
                    width={96}
                    layout="fixed"
                    objectFit="cover"
                    borderRadius=".35rem"
                  />
                </Box>

                <VStack
                  align="center"
                  justify="flex-start"
                  spacing={1}
                  maxW="lg"
                  h="100%"
                >
                  <VStack spacing={0} align="start" flexGrow={1}>
                    <Text fontWeight="600" fontSize="md" color={useColorModeValue("fenzodark.400", "gray.400")} noOfLines={2}>
                      {RichText.asText(article.data.title)}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={useColorModeValue("gray.500", "gray.200")}
                    >
                      {RichText.asText(article.data.excerpt)}
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.400")}>
                      <Text as="span" mr=".45rem"><Clock size=".75rem" /></Text> {`Publicado em ${articleDate}`}
                    </Text>
                  </VStack>
                </VStack>
              </HStack>
            </Box>
          </NextLink>
        </Box>
      ))}
    </>
  )
}

ListCard.propTypes = {
  articles: PropTypes.array,
}

export default ListCard;
