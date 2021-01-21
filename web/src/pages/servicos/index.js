import React from 'react'
import Head from 'next/head'
import { useServices } from '../../util/hooks/useServices'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import { Box, Badge, Image } from "@chakra-ui/react"

import Service from '../../components/Service'
import ServiceSingle from '../../components/Service/ServiceSingle'

// Page styles
import './styles.css'

const PageServices = () => {

  const { services, isLoading } = useServices()

  //if (error) return <div>Failed to load</div>
  if (!services) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Fenzo Serviços</title>
      </Head>
      <BaseLayout>
        <BaseContainer>
          <h1 className="text-center">Serviços</h1>
          <h5>A Fenzo faz ®</h5>
          <div className="fenzo-services__container">
            <ul className="fenzo-services">
              {services && services.map((service, index) => (
                <Service key={index} project={service} />
              ))}
            </ul>
            <div>
              {services && services.map((service, index) => (
                <ServiceSingle key={service.id} service={service} />
              ))}
            </div>
          </div>
          <Box sx={{ columnCount: [1, 3] }}></Box>
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default PageServices;
