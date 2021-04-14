import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Button,
  VStack,
  Text,
  Link as ChakraLink,
  Heading,
  Image,
  Wrap,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import Section from '../../components/Section'
import { FenzoIconMotion } from '../../components/Logo/LogoIconMotion'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import SectionHeading from '../../components/Section/SectionHeading'
import ScrollingImages from '../../components/Playground/ScrollingImages'
import { SmallCard } from '../../components/SimpleCard'
import interests from '../../data/interests.json'
import InterestTag from '../../components/InterestTag'
import { socials } from '../../constants'
import { Smiley, SmileyMeh } from 'phosphor-react'
import FooterFull from '../../components/Footer/FooterFull'


const slidingImages = [
  {
    src: "/images/casa-sala-portas-aluminio-guarda-corpo.jpg",
    alt: "",
    sx: { width: "450px" }
  },
  {
    src: "/images/guarda-corpo-vidro-residencia-casa.jpg",
    alt: "",
    sx: { width: "460px" }
  },
  {
    src: "/images/casa-vidro-temperado-ambiente-luz-2.jpg",
    alt: "",
    sx: { width: "624px" }
  }
]

//
// About Page
//
const Sobre = () => { // { tools }

  const slidingImageOpacity = useColorModeValue("0.9", "0.5")
  return (
    <>
      <Head>
        <title>Sobre a Fenzo</title>
      </Head>
      <BaseLayout>
        <Section bg={useColorModeValue("white", "#000b37")} className="page_header__section" full={true} direction="column">
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

        <ScrollingImages pushSx={{ my: 5 }} numberOfCopies={4} duration={20} isFullScreen={true}>
          {slidingImages.map((img) => (
            <Box key={`slider-image-${img.src}`} sx={{ mx: 4, ...img.sx }}>
              <Image
                {...img}
                h={{ base: "312px", sm: "180px", md: "260px", lg: "280px" }}
                borderRadius="md"
                opacity={slidingImageOpacity}
                sx={{
                  objectFit: "cover",
                  ...img.sx
                }}
              />
            </Box>
          ))}
        </ScrollingImages>

        <VStack
          justify="flex-start"
          align="center"
          spacing={8}
          w="100%"
          maxW="1366px"
          px="1.25rem"
          ml="auto"
          mr="auto"
        >

          <SectionHeading title="A Fenzo" px="0">
            <Link href="/servicos">
              <Button variant="link" colorScheme="blue" color={useColorModeValue("blue.500", "blue.100")} fontWeight="400">Explorar serviços</Button>
            </Link>
          </SectionHeading>

          <VStack spacing={4}>
            <Text>
              A Fenzo® nasceu da vontade em entregar o melhor da serralheria em alumínio, onde talento e profissionalismo servem de alicerces para a execução de projetos elegantes e duráveis.
              Somos uma serralheria moderna, e trabalhamos com produtos nobres como o alumínio e vidro temperado.
            </Text>
            {" "}
            <Text as="cite" fontSize="1.3rem" my="0.35rem">Produtos elegantes e duráveis, a Fenzo faz®</Text>
            <Text>
              A Fenzo foi criada para inovar a serralheria tradicional. Nos dedicamos na busca permanente da excelência, com a missão de prover soluções que criam o bem estar e a segurança na vida das pessoas.
              Fazemos isso ao entregar soluções arrojadas e personalizadas, sem jamais abrir mão da qualidade, do comprometimento, e da satisfação dos nossos clientes.
            </Text>
          </VStack>

          <SectionHeading title="Projetos" px="0" />

          <VStack spacing={4}>
            <Text>
              A missão da Fenzo® é simples, mas poderosa, e guia tudo o que fazemos. Isso inclui como nos portamos, como pensamos, como nos comunicamos, e a maneira que interagimos com as pessoas e o mundo a nossa volta.
            </Text>

            <Text>
              Na execução de projetos, nos dedicamos em absover o estilo, aspirações, e a vida real dos nossos clientes. Sabemos que cada projeto é único, assim como as preferências e os ideais de uma pessoa.
              Para criação de projetos nosso lema é "Sempre moderno e em movimento", e para cada projeto ajudamos a trazer contexto tanto para o design quanto para funcionalidade.<br></br>
            </Text>
          </VStack>

          <SectionHeading title="Encontre a Fenzo" subtitle="Acompanhe nas redes sociais" color="brand.gray.500" mt="4rem" px="0">
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

          <SimpleGrid columns={{ base: 2, sm: 1, md: 2, lg: 3 }} spacing={4} mt={8} w="100%">
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

          <VStack align="stretch" w="100%" spacing={4} mt="4rem">
            <Box as="h5" display="flex" align="center" mt="1.2rem">
              <Smiley display="inline-flex" width="2rem" height="2rem" /> <Box as="span" fontSize="1.2rem" ml=".65rem">Adoramos por aqui</Box>
            </Box>
            <Wrap>
              {interests.like.map((el, i) => (
                <InterestTag name={el} like key={i} />
              ))}
            </Wrap>
          </VStack>

          <VStack align="stretch" spacing={4} w="100%" pb="8rem">
            <Box as="h5" display="flex" align="center" mt="1.2rem">
              <SmileyMeh display="inline-flex" width="2rem" height="2rem" /> <Box as="span" fontSize="1.2rem" ml=".65rem">Não somos nada fãs de</Box>
            </Box>
            <Wrap>
              {interests.dislike.map((el, i) => (
                <InterestTag name={el} key={i} />
              ))}
            </Wrap>
          </VStack>

        </VStack>
      </BaseLayout>

      <FooterFull />
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
