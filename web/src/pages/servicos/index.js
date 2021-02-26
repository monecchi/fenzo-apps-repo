import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useServices } from '../../hooks/useServices'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import Section from '../../components/Section'
import { Box, SimpleGrid, Heading, Button, Text, Badge, Image, useBreakpointValue } from '@chakra-ui/react'
import SectionHeading from '../../components/Section/SectionHeading'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'

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
        <Section bg="#EFF2F5" className="page_header__section" full={true} direction="column">
          <PageHeaderDefault
            direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
            justify={{ base: "space-between", sm: "center", md: "center", lg: "space-between" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
              fontWeight="400"
              lineHeight="1"
              textAlign={{base: "left", sm: "center", md: "left", lg: "left"}}
              className="tight-text"
            >
              <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="brand.blue" mb="1rem">Serviços</Heading>
              Especialistas em <Heading
                d="block"
                as="span"
                color="brand.blue"
                fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
                fontWeight="600"
                lineHeight="1"
                className="tight-text"
              >
                serralheria em alumínio
            </Heading> de alto padrão
            </Heading>
            <Link href="/orcamento">
              <Button mt={{ base: "1.5rem", sm: "1.75rem", md: "1.75rem", lg: "0" }} colorScheme="blue" variant="solid">Solicitar Orçamento</Button>
            </Link>
          </PageHeaderDefault>
        </Section>
        <BaseContainer>
          <Box w="100%" maxW={{ xl: "1366px" }} px="20px">
            <SectionHeading title="Explorar categorias">
              <Link href="/orcamento">
                <Button variant="link" colorScheme="blue" fontWeight="400">ver mais</Button>
              </Link>
            </SectionHeading>
            <div className="fenzo-services__container">
              <ul className="fenzo-services">
                {services && services.map((service, index) => (
                  <Service key={index} project={service} />
                ))}
              </ul>
            </div>
          </Box>
          <Box w="100%" maxW={{ xl: "1366px" }} px="20px">
            <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={4} mt={8}>
              {services && services.map((service, index) => (
                <ServiceSingle key={service.id} service={service} />
              ))}
            </SimpleGrid>
          </Box>
        </BaseContainer>
      </BaseLayout>
      <style jsx>
        {`
          .fenzo-services__container {
            display: flex;
          }
          .fenzo-services {
            display: flex;
            list-style: none;
            width: 100%;
            max-width: 1366px;
            justify-content: space-between;
            align-items: center;
            margin-top: 54px;
            margin-bottom: 54px;
          }
        `}
      </style>
    </>
  )
}

export default PageServices;
