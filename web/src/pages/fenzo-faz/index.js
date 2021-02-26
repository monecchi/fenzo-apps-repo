import React from 'react'
import api from '../api'
import axios from 'axios'
import Head from 'next/head'
import {
  Button,
  VStack,
  HStack,
  Text,
  Link,
  IconButton,
  Heading,
  Wrap,
  SimpleGrid,
} from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import Section from '../../components/Section'
import SimpleCard from '../../components/SimpleCard'
import sorter from "sort-isostring"
import interests from '../../data/interests.json'
import InterestTag from '../../components/InterestTag'
import FooterFull from '../../components/Footer/FooterFull'
import Decoration from '../../components/Decoration'
import { Smiley, SmileyMeh } from 'phosphor-react'

//import DecorationSVG from '../../assets/illustrations/make-gate-fenzo.svg'
//<Decoration horizontalAlign="left" verticalAlign="top" decoImage={DecorationSVG} />


const About = () => { // ({ tools }

  //const result = useFetch('/api/v1')

  //const tools = result.tools

  return (
    <>
    <Head>
      <title>Sobre a Fenzo</title>
    </Head>
    <Decoration horizontalAlign="left" verticalAlign="top" />
    <BaseLayout hasNavbar={true}>
      <BaseContainer>
        <VStack spacing={8}>
          <Section mt="54px">
            <VStack align="start">
              <Heading as="h1" color="brand.gray_dark">A Fenzo</Heading>
              <Text color="gray.700">
                A Fenzo® nasceu da vontade em entregar o melhor da serralheria em alumínio, onde talento e profissionalismo servem de alicerces para a execução de projetos elegantes e duráveis.
                Somos uma serralheria moderna, e trabalhamos com produtos nobres como o alumínio e vidro temperado.
              </Text>
              {" "}
              <Text color="brand.dark" as="cite" fontSize="1.3rem">— Somos especialistas em serralheria de alto padrão.</Text>
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

                Acompanhe a Fenzo no Facebook {" "}
                <Link href="https://facebook.com/fenzoserralheria/" color="blue.500" _focus={{ boxShadow: 'none' }} isExternal>Vamos lá</Link>
              </Text>
            </VStack>
          </Section>
          <Section>
            <Heading as="h5" color="brand.gray.500" size="md">Encontre a Fenzo</Heading>
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
          <Section mb="54px">
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
      </BaseContainer>
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

export default About;
