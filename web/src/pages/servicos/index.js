import React from 'react'
import Head from 'next/head'
import { useServices } from '../../hooks/useServices'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import Section from '../../components/Section'
import { Box, SimpleGrid, Badge, Image } from "@chakra-ui/react"

import Service from '../../components/Service'
import ServiceSingle from '../../components/Service/ServiceSingle'

// Page styles
//import './styles.css'

const PageServices = () => {

  const { services, isLoading } = useServices()

  //if (error) return <div>Failed to load</div>
  //if (!services) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Fenzo Serviços</title>
      </Head>
      <BaseLayout>
        <BaseContainer>
          <Box w="100%" maxW={{ xl: "1366px" }}>
            <h1 className="text-center">Serviços</h1>
            <h5>A Fenzo faz ®</h5>
            <div className="fenzo-services__container">
              <ul className="fenzo-services">
                {services && services.map((service, index) => (
                  <Service key={index} project={service} />
                ))}
              </ul>
            </div>
          </Box>
          <Box w="100%" maxW={{ xl: "1366px" }}>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} mt={8}>
              {services && services.map((service, index) => (
                <ServiceSingle key={service.id} service={service} />
              ))}
            </SimpleGrid>
          </Box>
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default PageServices;
