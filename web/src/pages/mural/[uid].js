import { Fragment, useState, useEffect } from 'react'
import { client } from '../../../prismic-configuration'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import BlogSeo from '../../components/Blog/blog-seo'
import {
  Box,
  Button,
  IconButton,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import {
  Layout,
  SliceMachine,
  Chip,
  Author,
  Share,
  //DisqusComments,
  RelatedArticles,
} from '../../components/Blog'
import {
  Clock as FiClock,
  Ghost,
  Share as ShareIcon,
  ShareNetwork
} from 'phosphor-react'
//import Snakke from 'react-snakke'
import ReadingProgress from './components/ReadingProgress'
import { Banner } from '../../components/Slices'

import formatDate, { formatDateShort } from '../../utils/formatDate'
import { useRouter } from 'next/router'

const Article = ({ uid, tags, article, author, articles }) => {

  const publishedDate = article.created
  const modifiedDate = article.modified

  const [articleDate, setArticleDate] = useState(null)
  const [articleModifiedDate, setArticleModifiedDate] = useState(null)

  useEffect(() => {
    setArticleDate(formatDateShort(publishedDate))
    setArticleModifiedDate(formatDateShort(modifiedDate))
  }, [articleDate])

  const { asPath: URL } = useRouter()

  const [showComments, setShowComments] = useState(false)
  const [showShareIcons, setShowShareIcons] = useState(false)

  const [shareOpen, setShareOpen] = useState(false)
  const toggleShare = () => setShareOpen(!shareOpen)
  const closeShare = () => setShareOpen(false)

  const toggleShareIcons = () => {
    setShowShareIcons(!showShareIcons)
  }
  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <Fragment>
      {/* Article reading progress */}
      {/* <Snakke
        color='#484848'
        top='0px'
        height='5px'
        opacity='1'
        zIndex='10'
        shadow={false}
      /> */}
      <BlogSeo
        title={RichText.asText(article.title)}
        link={`http://localhost:3000/mural/${uid}`}
        image={article.article_image}
        publishDate={article.created}
        description={RichText.asText(article.excerpt).toString()}
        author={author.name}
      />
      <ReadingProgress target="main-layout" />
      <Layout
        image={article.article_image.url}
        pathUrl={URL}
      >
        {/* Article title */}
        <Box as='h1' textAlign='center' mb={3}>
          {RichText.asText(article.title)}
        </Box>

        {/* Article meta */}
        <Box
          position='relative'
          display="flex"
          justifyContent='flex-start'
          alignItems='center'
          w="100%"
          py={4}
          className="article_meta__wrapper"
        >
          {/* Published date */}
          <Text as='cite' display='inline-flex' mx={4}>
            {`${articleDate}`}
          </Text>

          {/* Reading time */}
          <Text as='cite' display='flex' justifyContent='center' alignItems='center' mx={4}>
            <FiClock size='1.2rem' style={{ marginRight: '.35rem', display: 'inline-flex' }} />
            &nbsp;{article.read_time}&nbsp;min. de leitura
          </Text>

          {/* Share action button */}
          {/* <Box
            display="flex"
            alignItems="center"
            cursor='pointer'
            onClick={toggleShareIcons}
            aria-label={`Compartilhar ${RichText.asText(article.title)}`}
          >
            <ShareNetwork
              size='1.65rem'
              onMouseEnter={toggleShareIcons}
            />

            {showShareIcons && (
              <Box
                position='absolute'
                ml='1.5rem'
                w="auto"
                onMouseLeave={toggleShareIcons}
              >
                <Share
                  articleURL={URL}
                  articleName={RichText.asText(article.title)}
                  hideShareText={true}
                />
              </Box>
            )}
          </Box> */}

          {/* Share popover */}
          <Popover
            returnFocusOnClose={false}
            isOpen={shareOpen}
            onClose={closeShare}
            closeOnBlur={true}
            boxShadow='0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)'
            maxW='14rem'
          >
            <PopoverTrigger>
              <IconButton
                variant='ghost'
                color="fenzodark.400"
                bg='transparent'
                icon={<ShareNetwork size='1.65rem' color='currentColor' />}
                onClick={toggleShare}
                onMouseEnter={toggleShare}
              />
            </PopoverTrigger>
            <PopoverContent
              _focus={{ boxShadow: 'none', outline: '0' }}
            >
              <PopoverArrow />
              {/*<PopoverCloseButton />*/}
              <PopoverHeader>Compartilhe</PopoverHeader>
              <PopoverBody onMouseLeave={closeShare}>
                <Share
                  articleURL={URL}
                  articleName={RichText.asText(article.title)}
                  hideShareText={true}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>

        </Box>

        {/* Categories */}
        <Box
          display='flex'
          flexFlow='row wrap'
          justifyContent='center'
          alignItems='center'
          mt={2}
        >
          {article.categories.map(({ slug }, index) => {
            return (
              slug && (
                <Chip name={slug} slug={slug} type='category' key={index} />
              )
            )
          })}
        </Box>

        {/* Article excerpt */}
        <Box
          as='p'
          display='flex'
          justifyContent='center'
          alignItems='center'
          my={4}
        >
          {RichText.asText(article.excerpt)}
        </Box>

        <Banner image={article.article_image["wide-sm"]} />

        {/* Slices */}
        <SliceMachine slices={article.body} />

        <Text as='cite' color="gray">
          Última atualização {articleModifiedDate}
        </Text>

        {/* Tags */}
        <Box
          display='flex'
          flexFlow='row wrap'
          justifyContent='flex-start'
          alignItems='center'
          my={2}
        >
          {tags.map((tag, index) => {
            return <Chip name={tag} slug={tag} type='tag' key={index} />
          })}
        </Box>

        {/* Share Buttons */}
        <Share
          articleURL={URL}
          articleName={RichText.asText(article.title)}
        />

        {/* Author slice */}
        {author && <Author author={author} />}

        {/* Related articles */}
        <RelatedArticles
          uid={uid}
          categories={article.categories}
          tags={tags}
          related={articles}
        />

        <Box as='p' textAlign='center'>
          <Button
            variant='solid'
            colorScheme='blue'
            onClick={toggleComments}
          >
            {showComments ? 'Ocultar' : ''} Comentários
          </Button>
        </Box>

        {/* Disqus comments */}
        {showComments ? (
          <Box mt={4}>
            {/* <DisqusComments
              slug={uid}
              title={RichText.asText(article.title)}
              pathname={URL}
            /> */}
            <FormControl>
              <FormLabel htmlFor='comentario'>Comentar</FormLabel>
              <Textarea name='comentario' />
            </FormControl>
          </Box>
        ) : null}
      </Layout>
    </Fragment>
  )
}

export default Article;

//
// prismic.io data
//
export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { uid } = params
  const { ref } = previewData
  const { tags, data: article } = await client.getByUID(
    'post',
    uid,
    ref ? { ref } : null
  )
  // get authorID
  const authorId = await article?.author?.id
  // fetch author data based on authorId
  const { data: author } = await client.getByID(authorId, ref ? { ref } : null)
  const { results: articles } = await client.query(
    Prismic.Predicates.at('document.type', 'post')
  )
  return {
    props: { uid, tags, article, author, articles, preview },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'post')
  )

  const paths = results.map((article) => {
    return {
      params: {
        uid: article.uid,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
