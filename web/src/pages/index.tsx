import React, { useState } from 'react'
import Head from 'next/head'

//import '../../styles/Fenzo.module.css'
//import styles from '../../styles/Fenzo.module.css'

import Navbar from '../components/Navbar/Navbar'
import SliderHome from '../components/Slider/Home'
import ServiceSlider from '../components/Slider/HomeServices/index'

const sliderProps = {
  hasImage: true
}

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
        </div>
      </main>
    </div>
  )
}

export default Home
