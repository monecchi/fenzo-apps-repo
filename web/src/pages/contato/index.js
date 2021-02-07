
import React from "react";
import Head from 'next/head'
import theme from '../../../styles/theme'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'

import {
  StaticGoogleMap,
  Marker,
  Direction,
  Path,
} from 'react-static-google-map'

const StaticMap = ({ latitude, longitude, size }) => {
  return (
    <StaticGoogleMap size={size} className="img-fluid" apiKey="AIzaSyCZoSLgxGnNxlGeHwJUocZhTlfWJExud4w">
      <Marker location="22.863894,-43.509035" color="blue" label="F" />
    </StaticGoogleMap>
  )
}

//
// Contact Page
//
const Contato = () => {
  return (
    <>
      <Head>
        <title>Contato - Fale Conosco</title>
      </Head>
      <BaseLayout>
        <BaseContainer>
          <h1 className="text-center">Contato</h1>
          <StaticMap latitude="-22.863894" longitude="-43.509035" size="1366x500" />
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default Contato;
