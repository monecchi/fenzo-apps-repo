//import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
//import { Client } from '../../../prismic-configuration'
import { client } from '../../../prismic-configuration'
import Prismic from 'prismic-javascript'
import {
  Box,
  Button,
  VStack,
  Text,
  Link as ChakraLink,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import Section from '../../components/Section'
import SectionShape from '../../components/Section/SectionShape'
import SectionHeading from '../../components/Section/SectionHeading'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
//import Listing from '../mural/components/Listing'
import ListCard from '../../components/Blog/ListCard'
import SimpleCard, { SmallCard } from '../../components/SimpleCard'
import sorter from "sort-isostring"
import { socials } from '../../constants'
import { Smiley, SmileyMeh } from 'phosphor-react'
import FooterFull from '../../components/Footer/FooterFull'

//
// Blog - Articles Page Component
//
const Blog = (props) => { // { articles }

  return (
    <>
      <Head>
        <title>Mural - Blog da Fenzo</title>
      </Head>
      <BaseLayout>
        <Section
          bg={useColorModeValue("white", "#000b37")}
          full={true}
          bgImage="url('https://images.prismic.io/fenzo/68ea2dcb-a3ae-4ca9-aa2f-2c1cd270f8bb_casa-esquadrias-aluminio-fachada.jpg?auto=compress,format')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          _before={{
            content: `""`,
            position: "absolute",
            width: "100%",
            height: "100%",
            bg: "gray.900",
            opacity: "0.6",
            zIndex: 0
          }}
          className="blog_header__section"
        >
          <PageHeaderDefault
            direction="column"
            align="left"
            justify="left"
            zIndex={1}
          >
            <Heading
              as="h1"
              color="#cfd1dc"
              fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
              fontWeight="400"
              lineHeight="1"
              textAlign={{ base: "left", sm: "left", md: "left", lg: "left" }}
              className="tight-text"
            >
              <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="subtleblue.100" mt="1rem" mb="1rem">Mural da Fenzo</Heading>

              <Heading
                as="span"
                color="white"
                fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
                fontWeight="600"
                lineHeight="1"
                className="tight-text"
              >
                Fenzo
              </Heading> Blog
            </Heading>

            <Text mt="1.5rem" color="white">Artigos para inspirar e criar novos conceitos com alumínio</Text>

          </PageHeaderDefault>

          <SectionShape
            type="curve"
            color={useColorModeValue("white", "blue.900")}
            zIndex={1}
          />
        </Section>

        <VStack
          spacing={8}
          py={{ base: "8rem", sm: "6rem", md: "6rem", lg: "8rem" }}
          m="0 auto"
          w="100%"
          maxW="780px"
        >

          <VStack w="100%" align="start" spacing={4} px="1.25rem" className="articles_wrapper">
            <ListCard articles={props.articles.results} />
          </VStack>

          <SectionHeading title="Encontre a Fenzo" subtitle="Acompanhe nas redes sociais" color="brand.gray.500" pt="2.25rem">
            <ChakraLink href="https://g.page/fenzoFaz" isExternal={true}>
              <Button variant="link" colorScheme="blue" fontWeight="400">Ver no Google</Button>
            </ChakraLink>
          </SectionHeading>

          <Section mt="2.25rem">
            <SimpleGrid w="100%" maxW="1366px" m="0 auto" columns={{ base: 3, sm: 1, md: 2, lg: 3 }} spacing={4} mt={8} style={{ paddingLeft: 0, paddingRight: 0 }}>
              {socials && socials
                .map((social) => (
                  <SmallCard
                    key={social.name}
                    name={social.name}
                    description={social.description}
                    icon={social.icon}
                    link={social.link}
                  />
                ))}
            </SimpleGrid>
          </Section>

        </VStack>

      </BaseLayout>

      <FooterFull />
    </>
  );
};

export async function getStaticProps() {
  const articles = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.created desc]', pageSize: 10, page: 1 }
  )
  return {
    props: {
      articles,
    },
    revalidate: 600,
  }
}


// export async function getStaticProps() {
//   const res = await axios.get(
//     process.env.API_URL + '/api/v1'
//   )

//   //console.log(res.data)

//   const tools = res.data[0].tools

//   return {
//     props: {
//       tools,
//     },
//     revalidate: 600,
//   }
// }

export default Blog;
