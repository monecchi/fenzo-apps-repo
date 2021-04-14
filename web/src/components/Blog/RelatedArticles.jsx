import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, SimpleGrid } from '@chakra-ui/react'
import ListCard from './ListCard'

const RelatedArticles = ({ uid, categories, tags: articleTags, related }) => {
  // get slugs from categories of the current article
  const articleSlugs = categories.map(({ slug }) => slug)
  let relatedArticles = []

  relatedArticles = related
    .filter((article) => article.uid !== uid) // remove current article from articles list
    .map((article) => {
      const { categories } = article.data
      const { tags } = article
      let categoryMatch = false
      let tagMatch = false

      // check article categories slug inclluded in articleSlugs
      categories.forEach(({ slug }) => {
        if (articleSlugs.includes(slug)) {
          categoryMatch = true
        }
      })

      // check article tag included in articleTags
      tags.forEach((tag) => {
        if (articleTags.includes(tag)) {
          tagMatch = true
        }
      })

      if (categoryMatch || tagMatch) {
        return article
      }
    })
    .filter((article) => article !== undefined) // for articles that don't match both category & tag will be undefined
    .slice(0, 3) // limit relatedArticles number to 3 or any number of your choice

  return (
    <Fragment>
      <Box my={8} pt={8} pb={8}>
        <Box as='h4' fontSize='h4' textAlign='center'>Artigos relacionados</Box>
        <Box>
          {relatedArticles.length > 0 ? (
            <SimpleGrid columns={{ base: 2, sm: 1, md: 2, lg: 2 }} spacing={4} mt={4}>
              <ListCard articles={relatedArticles} />
            </SimpleGrid>
          ) : (
            <Box
              as='p'
              textAlign='center'
              fontStyle='italic'
            >
              Nenhum artigo relacionado!
            </Box>
          )}
        </Box>
      </Box>
    </Fragment>
  )
}

RelatedArticles.propTypes = {
  uid: PropTypes.string,
  categories: PropTypes.array,
  articleTags: PropTypes.array,
  related: PropTypes.array,
}

export default RelatedArticles
