import React from 'react'
import Head from 'next/head'

//import '../../styles/Fenzo.module.css'
//import styles from '../../styles/Fenzo.module.css'

import Navbar from '../components/Navbar/Navbar'
import SliderHome from '../components/Slider/Home'
import ServiceSlider from '../components/Slider/HomeServices/index'
import MenuSideDrawer from '../components/MenuSideDrawer'
//import ServiceList from '../util/hooks/useServices'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

//{/*<ServiceList />*/}

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Fenzo Serralheria</title>
      </Head>

      <Navbar />

      <main className="main-layout">
        <div className="home-page">
          <SliderHome />
          <ServiceSlider />
          <Hero
            title="Serralheria moderna"
            subtitle="Especialistas em serralheria de alto padrão."
            image="http://localhost:3000/aluminio-sanfonada-vidro.jpg"
            ctaLink="/"
            ctaText="A Fenzo Faz"
          />
        </div>
      </main>
      <MenuSideDrawer />
      <Footer />
    </div>
  )
}

export default Home
