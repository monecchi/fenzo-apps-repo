/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import theme from '../../../../styles/theme'
import { useTheme } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import { default as NextLink } from 'next/link'
import { hrefResolver, linkResolver } from '../../../../prismic-configuration'
import Image from 'next/image'
import { RichText, Date as ParseDate } from 'prismic-reactjs'
import styled from '@emotion/styled'
import { Clock as FiClock } from 'phosphor-react'
import formatDate, { formatDateShort } from '../../../utils/formatDate'
import ArticleBadge from '../components/ArticleBadge'
import { SimpleGrid, Box, Badge, Text, Heading } from '@chakra-ui/react'
import SimpleCard, { ArticleListCard, SmallCard } from '../../../components/SimpleCard'
//import {trackGAEvent} from '../utils/googleAnalytics'

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

const Listing = ({ articles }) => {
  const theme = useTheme()

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 325px);
    grid-template-rows: auto;
    grid-gap: 1.25rem;
    justify-content: center;
    margin: auto;
    @media (max-width: ${theme.breakpoints['sm']}) {
      grid-template-columns: 1fr;
    }
  `

  const ArticleCard = styled.div`
    display: grid;
    grid-template-columns: 325px;
    grid-template-rows: 200px auto;
    grid-gap: 0;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: inset -5px -5px 12px ${theme.colors.black},
      inset 5px 5px 12px ${theme.colors.black};
  `

  return (
    <>
      <SimpleGrid columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={4} mt={8}>
        {articles && articles.map((article) => (
          <ArticleListCard
            key={RichText.asText(article.uid)}
            name={RichText.asText(article.data.title)}
            image={article.data.article_image.url}
            description={RichText.asText(article.data.excerpt)}
            date={`Publicado em ${formatDateShort(article.data.created)}`}
            link="/"
          />
        ))}
      </SimpleGrid>

      <GridLayout>
        {articles && articles.map((article) => (
          <ArticleCard
            aria-label={`Read article ${article.uid}`}
            title={article.uid}
            key={article.uid}>
            <Box style={{ overflow: 'hidden' }}>
              <NextLink
                href={hrefResolver(article)}
                as={linkResolver(article)}
                passHref>
                <Box as="a">
                  <Image
                    loader={prismicLoader}
                    src={article.data.article_image.url}
                    alt={article.data.article_image.alt}
                    title={article.data.article_image.alt}
                    layout='responsive'
                    width={article.data.article_image.dimensions.width}
                    height={article.data.article_image.dimensions.height}
                    className='article-image'
                  />
                </Box>
              </NextLink>
            </Box>
            <Box
              sx={{
                px: 3,
                py: 2,

                '@media (max-width: 30rem)': {
                  px: 3,
                },
              }}>
              <Heading
                as="h2"
                sx={{
                  m: 0,
                  pt: 0,
                  minHeight: '5rem',
                  fontSize: [2, 3],
                  '@media (max-width: 30rem)': {
                    pt: 0,
                    height: 'auto',
                  },
                }}>
                <NextLink
                  href={hrefResolver(article)}
                  as={linkResolver(article)}
                  passHref>
                  <Box
                    as="a"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                      ':hover,:focus': {
                        color: 'secondary',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      },
                    }}
                    // onClick={() =>
                    //   trackGAEvent(
                    //     'home',
                    //     `clicked on ${article.uid} article title`,
                    //     'text click'
                    //   )
                    // }
                    rel='noreferrer noopener'>
                    {RichText.asText(article.data.title)}
                  </Box>
                </NextLink>
              </Heading>
              <Text
                sx={{
                  my: 0,
                  fontSize: [1, 2],
                  height: '5.5rem',
                  '@media screen and (max-width: 30rem)': {
                    height: 'auto',
                  },
                }}>
                {truncateText(`${RichText.asText(article.data.excerpt)}`)}&nbsp;
              <NextLink
                  href={hrefResolver(article)}
                  as={linkResolver(article)}
                  passHref>
                  <Box
                    as="a"
                    sx={{ variant: 'styles.a' }}
                    aria-label={`Read the article on ${RichText.asText(
                      article.data.title
                    )}`}
                    title={`Read the article on ${RichText.asText(
                      article.data.title
                    )}`}
                    // onClick={() =>
                    //   trackGAEvent(
                    //     'home',
                    //     `clicked on ${article.uid} read full article`,
                    //     'link click'
                    //   )
                    // }
                    rel='noreferrer noopener'>
                    Read Full Article
                </Box>
                </NextLink>
              </Text>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  margin: '0 auto 0 -0.25rem',
                }}>
                {article.data.categories.map(({ slug }, index) => {
                  return (
                    slug && (
                      <ArticleBadge
                        name={slug}
                        slug={slug}
                        type='category'
                        page='listing'
                        key={index}
                      // onClick={() =>
                      //   trackGAEvent('home', `clicked on ${slug}`, 'chip click')
                      // }
                      />
                    )
                  )
                })}
              </Box>
              <Box
                sx={{
                  fontSize: "1rem",
                  mb: 1,
                  py: 1,
                }}>
                <Text>
                  {formatDate(article.data.created)}
                  {`Article posted on ${formatDateShort(article.data.created)}`}
                </Text>
                <Text as="span" sx={{ mx: 2, fontSize: '10px' }}>|</Text>
                <Text>
                  <Box as="span"><FiClock size="36" style={{ marginBottom: '-0.15rem' }} /></Box>
                  <Box as="span">&nbsp;{article.data.read_time}&nbsp;min read</Box>
                </Text>
              </Box>

            </Box>
          </ArticleCard>
        ))}
      </GridLayout>
    </>
  )
}

Listing.propTypes = {
  articles: PropTypes.array,
}

export default Listing