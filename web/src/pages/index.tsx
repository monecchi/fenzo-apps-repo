import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'
import BaseLayout from '../components/Layouts/BaseLayout'
import HomeSlider from '../components/Slider/Home'
import SectionHeading from '../components/Section/SectionHeading'
import ServiceSlider from '../components/Slider/HomeServices/index'
import Hero from '../components/Hero'
import { CTA } from '../components/CallToAction'
//import { ButtonPrimary, ButtonSoftPrimary, ButtonSoftSuccess, ButtonPrimaryWhite, ButtonPrimaryOutline } from '../components/Buttons'
import FooterFull from '../components/Footer/FooterFull'

const Home: React.FC = () => {

  return (
    <>
      <Head>
        <title>Fenzo Serralheria</title>
      </Head>
      <BaseLayout>

        <HomeSlider />

        <CTA
          title="Alumínio é luxo"
          content="Alumínio como elemento principal na decoração. Conheça algumas aplicações deste material nobre e versátil que lidera a tendência de mercado."
          image="/aluminio-sanfonada-vidro.jpg"
          ctaLink="/mural/aluminio-e-luxo"
          ctaText="Ler no Blog"
        />

        <SectionHeading title="Serviços Fenzo" data-aos="fade-up">
          <Link href="/servicos">
            <Button variant="link" colorScheme="blue" color={useColorModeValue("blue.500", "blue.100")} fontWeight="400">Explorar serviços</Button>
          </Link>
        </SectionHeading>

        <ServiceSlider />

        <SectionHeading title="Vem pra Fenzo" data-aos="fade-up" data-aos-delay={100}>
          <Link href="/orcamento">
            <Button variant="link" colorScheme="blue" color={useColorModeValue("blue.500", "blue.100")} fontWeight="400">Orçamento</Button>
          </Link>
        </SectionHeading>

        <Hero
          title="Serralheria moderna"
          subtitle="Especialistas em serralheria de alto padrão."
          image="/aluminio-sanfonada-vidro.jpg"
          ctaLink="/orcamento"
          ctaText="Solicitar orçamento"
          helperText="Seu projeto elegante e durável. A Fenzo faz®"
        />

        <FooterFull />

      </BaseLayout>
    </>
  )
}

export default Home
