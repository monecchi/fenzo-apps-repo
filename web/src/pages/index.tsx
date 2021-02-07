import React from 'react'
import Head from 'next/head'
//import '../../styles/Fenzo.module.css'
//import styles from '../../styles/Fenzo.module.css'
import PageTransition from '../components/PageTransitions'
//import Navbar from '../components/Navbar/Navbar'
import HomeSlider from '../components/Slider/Home'
import ServiceSlider from '../components/Slider/HomeServices/index'
//import MenuSideDrawer from '../components/MenuSideDrawer'
//import ServiceList from '../util/hooks/useServices'
import Hero from '../components/Hero'
import { CTA } from '../components/CallToAction'
//import Footer from '../components/Footer'
import FooterFull from '../components/Footer/FooterFull'

//{/*<ServiceList />*/}

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Fenzo Serralheria</title>
      </Head>
      <div>
        <PageTransition>
          <main className="main-layout">
            <div className="home-page">
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
                ctaLink="/"
                ctaText="A Fenzo Faz"
              />
            </div>
          </main>

          {/*<Footer />*/}
          <FooterFull />
        </PageTransition>
      </div>
    </>
  )
}

export default Home
