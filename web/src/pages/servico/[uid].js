import { Fragment, useState, useEffect } from 'react'
import { client } from '../../../prismic-configuration'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { nextPrismicLoader } from '../../constants'
import ServiceSeo from '../../components/Service/service-seo'
import siteUrl from '../../utils/siteUrl'
import {
  Box,
  Button,
  IconButton,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../../components/Section'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import SectionShape from '../../components/Section/SectionShape'
import { SkewedImagePrismic } from '../../components/Image/SkewedImage'
import {
  ServiceLayout
} from '../../components/Blog'
import {
  SliceMachine,
  Chip,
  Share
} from '../../components/Blog'
import {
  Clock as FiClock,
  Ghost,
  Share as ShareIcon,
  ShareNetwork
} from 'phosphor-react'
//import Snakke from 'react-snakke'

import { Banner } from '../../components/Slices'

import formatDate, { formatDateShort } from '../../utils/formatDate'
import { useRouter } from 'next/router'

const FenzoService = ({ uid, tags, service, services }) => {

  const publishedDate = service.created
  const modifiedDate = service.modified

  const [serviceDate, setArticleDate] = useState(null)
  const [serviceModifiedDate, setArticleModifiedDate] = useState(null)

  useEffect(() => {
    setArticleDate(formatDateShort(publishedDate))
    setArticleModifiedDate(formatDateShort(modifiedDate))
  }, [serviceDate])

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
      <ServiceSeo
        title={RichText.asText(service.title)}
        link={`${siteUrl('mural') + uid}`}
        image={service.service_image}
        publishDate={service.created}
        description={RichText.asText(service.excerpt).toString()}
        author={"Fenzo Serralheria"}
      />

      {/* Service Section Header */}
      <Section
        w="100%"
        bg={useColorModeValue("#EFF2F5", "#000b37")}
        className="service_section__header"
      >
        <PageHeaderDefault
          justifyContent="space-between"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="row"
            flexFlow={{ base: "row", sm: "column wrap", md: "column wrap", lg: "row" }}
            w="100%"
          >
            <Box
              display="flex"
              w="100%"
              flexFlow="column wrap"
            >
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
              <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="brand.blue" mt="1rem">SERVIÇO</Heading>
              <Heading
                as="h1"
                fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
                fontWeight="600"
                lineHeight="1"
                textAlign="left"
                className="tight-text"
              >
                {RichText.asText(service.title)}
              </Heading>
              <Text fontSize="1.2rem" mb="1.2rem">{RichText.asText(service.excerpt)}</Text>
            </Box>

            <Box
              display="flex"
              flex="0 0 50%"
              maxW="50%"
            >
              <SkewedImagePrismic
                loader={nextPrismicLoader}
                src={service.service_image["wide-sm"]}
                alt="Portão de alumínio"
                width="100%"
                height="auto"
                objectFit="cover"
                layout="responsive"
                skew_direction="left"
              />
            </Box>
          </Box>

        </PageHeaderDefault>
        <SectionShape
          type="curve"
          color={useColorModeValue("white", "blue.900")}
        />
      </Section>

      <ServiceLayout
        image={service.service_image.url}
        pathUrl={URL}
      >
        {/* Service meta */}
        <Box
          position='relative'
          display="flex"
          justifyContent='flex-end'
          alignItems='center'
          w="100%"
          maxW="1366px"
          m="0 auto"
          px="20px"
          py={4}
          className="service_meta__wrapper"
        >

          {/* Reading time */}
          <Text as='cite' display='flex' justifyContent='center' alignItems='center' mx={4}>
            Compartilhar
          </Text>

          {/* Share popover */}
          <Popover
            returnFocusOnClose={false}
            isOpen={shareOpen}
            onClose={closeShare}
            closeOnBlur={true}
            boxShadow='0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)'
            maxW='14rem'
            placement="left"
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
                  articleName={RichText.asText(service.title)}
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
          {service.categories && service.categories.map(({ slug }, index) => {
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
          px="20px"
        >
          {RichText.asText(service.excerpt)}
        </Box>

        <Banner image={service.service_image["wide-sm"]} />

        {/* Slices */}
        <SliceMachine slices={service.body} />

        {/* Share Buttons */}
        <Share
          articleURL={URL}
          articleName={RichText.asText(service.title)}
        />

        {/* Related services */}

      </ServiceLayout>
    </Fragment>
  )
}

export default FenzoService;

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
  const { tags, data: service } = await client.getByUID(
    'service',
    uid,
    ref ? { ref } : null
  )

  const { results: services } = await client.query(
    Prismic.Predicates.at('document.type', 'service')
  )
  return {
    props: { uid, tags, service, services, preview },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'service')
  )

  const paths = results.map((service) => {
    return {
      params: {
        uid: service.uid,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
