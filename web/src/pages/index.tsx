import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import BaseLayout from '../components/Layouts/BaseLayout'
import HomeSlider from '../components/Slider/Home'
import ServiceSlider from '../components/Slider/HomeServices/index'
import Hero from '../components/Hero'
import { CTA } from '../components/CallToAction'
import { ButtonPrimary, ButtonSoftPrimary, ButtonSoftSuccess, ButtonPrimaryWhite, ButtonPrimaryOutline } from '../components/Buttons'
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
          ctaLink="/"
          ctaText="Ler artigo"
        />
        <ServiceSlider />
        <Hero
          title="Serralheria moderna"
          subtitle="Especialistas em serralheria de alto padrão."
          image="/aluminio-sanfonada-vidro.jpg"
          ctaLink="/orcamento"
          ctaText="Solicitar orçamento"
          helperText="Seu projeto elegante e durável. A Fenzo faz®"
        />

        <Box d="flex" w="100%" maxW="1366px" justifyContent="space-around" alignItems="center" py="2rem" m="0 auto">

          <ButtonPrimary variant="ghost" fontWeight="400" size="lg">
            btn primary
            </ButtonPrimary>

          <ButtonSoftPrimary fontWeight="400" size="lg">
            btn primary
            </ButtonSoftPrimary>

          <ButtonSoftSuccess fontWeight="400" size="lg">
            btn primary
            </ButtonSoftSuccess>

          <ButtonPrimaryWhite fontWeight="400" size="lg">
            btn primary white
            </ButtonPrimaryWhite>

          <ButtonPrimaryOutline fontWeight="400" size="lg">
            btn primary outline
            </ButtonPrimaryOutline>

        </Box>

        <FooterFull />
      </BaseLayout>
    </>
  )
}

export default Home;
