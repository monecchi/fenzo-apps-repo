import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import api from '../api'
import axios from 'axios'
import {
  Button,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  IconButton,
  Heading,
  Wrap,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import Section from '../../components/Section'
import SectionHeading from '../../components/Section/SectionHeading'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import { LogoIcon } from '../../components/Logo/LogoIcon'
import { FenzoIconMotion } from '../../components/Logo/LogoIconMotion'
import SimpleCard, { SmallCard } from '../../components/SimpleCard'
import sorter from "sort-isostring"
import interests from '../../data/interests.json'
import InterestTag from '../../components/InterestTag'
import Decoration from '../../components/Decoration'
import { socials } from '../../constants'
import { Smiley, SmileyMeh } from 'phosphor-react'
import FooterFull from '../../components/Footer/FooterFull'

//import DecorationSVG from '../../assets/illustrations/make-gate-fenzo.svg'
//<Decoration horizontalAlign="left" verticalAlign="top" decoImage={DecorationSVG} />


const Sobre = ({ tools }) => {

  //const result = useFetch('/api/v1')

  //const tools = result.tools

  return (
    <>
      <Head>
        <title>Sobre a Fenzo</title>
      </Head>
      <Decoration horizontalAlign="left" verticalAlign="top" />
      <BaseLayout hasNavbar={true}>
        <Section bg="#ffffff" className="page_header__section" full={true} direction="column">
          <PageHeaderDefault
            direction="column"
            justify="center"
          >
            <FenzoIconMotion mb="1rem" />
            <Heading
              as="h1"
              fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
              fontWeight="400"
              lineHeight="1"
              textAlign={{ base: "left", sm: "center", md: "left", lg: "left" }}
              className="tight-text"
            >
              <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="brand.blue" mt="1rem" mb="1rem">Sobre nós</Heading>
              Clientes felizes, projetos incríveis, conheça a <Heading
                as="span"
                color="brand.blue"
                fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
                fontWeight="600"
                lineHeight="1"
                className="tight-text"
              >
                Fenzo
            </Heading>
            </Heading>
            <Text mt="1.5rem">— Especialistas em serralheria de alumínio de alto padrão®</Text>
          </PageHeaderDefault>
        </Section>

          <VStack spacing={8} py="2rem">
            <Section>
              <VStack align="center">

                <SectionHeading title="A Fenzo">
                  <Link href="/servicos">
                    <Button variant="link" colorScheme="blue" color={useColorModeValue("blue.500", "blue.100")} fontWeight="400">Explorar serviços</Button>
                  </Link>
                </SectionHeading>

                <Text color="gray.700">
                  A Fenzo® nasceu da vontade em entregar o melhor da serralheria em alumínio, onde talento e profissionalismo servem de alicerces para a execução de projetos elegantes e duráveis.
                  Somos uma serralheria moderna, e trabalhamos com produtos nobres como o alumínio e vidro temperado.
                </Text>
                {" "}
                <Text color="brand.dark" as="cite" fontSize="1.3rem" my="0.35rem">Produtos elegantes e duráveis, a Fenzo faz®</Text>
                <Text color="gray.50">
                  A Fenzo foi criada para inovar a serralheria tradicional. Nos dedicamos na busca permanente da excelência, com a missão de prover soluções que criam o bem estar e a segurança na vida das pessoas.
                  Fazemos isso ao entregar soluções arrojadas e personalizadas, sem jamais abrir mão da qualidade, do comprometimento, e da satisfação dos nossos clientes.
              </Text>
              </VStack>
            </Section>
            <Section>
              <VStack align="stretch" spacing={4}>
                <Heading as="h5" color="brand.gray_dark" size="md">
                  Projetos
                </Heading>
                <Text>
                  A missão da Fenzo® é simples, mas poderosa, e guia tudo o que fazemos.
                  Isso inclui como nos portamos, como pensamos, como nos comunicamos, e a
                  maneira que interagimos com as pessoas e o mundo a nossa volta.
                </Text>
                <Text>
                  Na execução de projetos, nos dedicamos em absover o estilo, aspirações, e a vida real dos nossos clientes.
                  Sabemos que cada projeto é único, assim como as preferências e os ideais de uma pessoa.

                  Para criação de projetos nosso lema é "Sempre moderno e em movimento", e para cada projeto ajudamos a trazer contexto tanto para o design quanto para funcionalidade.<br></br>

                  Acompanhe a Fenzo no Facebook{" "}
                  <Link href="https://facebook.com/fenzoserralheria/" color="blue.500" _focus={{ boxShadow: 'none' }} isExternal>Vamos lá</Link>
                </Text>
              </VStack>
            </Section>
            <Section>

              <SectionHeading title="Encontre a Fenzo" subtitle="Acompanhe nas redes sociais" color="brand.gray.500">
                <ChakraLink href="https://g.page/fenzoFaz" isExternal={true}>
                  <Button variant="link" colorScheme="blue" fontWeight="400">Ver no Google</Button>
                </ChakraLink>
              </SectionHeading>

              {/* <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
                {tools && tools
                  .filter((t) => t.fields.Platform === "Android")
                  .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                  .map((tool) => (
                    <SimpleCard
                      key={tool.id}
                      name={tool.fields.Name}
                      description={tool.fields.Description}
                      image={tool.fields.Image}
                      platform={tool.fields.Platform}
                      isAffiliate={tool.fields.Affiliate}
                      link={tool.fields.Link}
                    />
                  ))}
              </SimpleGrid> */}

              <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
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
            <Section>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2"><Smiley /></Heading>
                <Wrap>
                  {interests.like.map((el, i) => (
                    <InterestTag name={el} like key={i} />
                  ))}
                </Wrap>
              </VStack>
            </Section>
            <Section>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2"><SmileyMeh /></Heading>
                <Wrap>
                  {interests.dislike.map((el, i) => (
                    <InterestTag name={el} key={i} />
                  ))}
                </Wrap>
              </VStack>
            </Section>
          </VStack>
      </BaseLayout>
      <FooterFull />
      <style jsx global>
        {`
        .title-tightest {
          letter-spacing: -.03em;
        }
        .short-lh {
          line-height: 1;
        }
      `}
      </style>
    </>
  );
};

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

export default Sobre;
