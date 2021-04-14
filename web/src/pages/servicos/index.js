import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useServices } from '../../hooks/useServices'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import Section from '../../components/Section'
import { Box, HStack, SimpleGrid, Heading, Button, Text, Badge, Image, useColorModeValue } from '@chakra-ui/react'
import SectionHeading from '../../components/Section/SectionHeading'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import { ButtonSoftPrimary } from '../../components/Buttons'
import Service from '../../components/Service'
import ServiceSingle from '../../components/Service/ServiceSingle'
import FooterFull from '../../components/Footer/FooterFull'

// Page styles
//import './styles.css'

const PageServices = () => {

  const { services, isLoading } = useServices()

  //if (error) return <div>Failed to load</div>
  //if (!services) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Fenzo Serviços - Serralheria em Alumínio</title>
      </Head>
      <BaseLayout>
        <Section bg={useColorModeValue("#EFF2F5", "#000b37")} className="page_header__section" full={true} direction="column">
          <PageHeaderDefault
            direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
            justify={{ base: "space-between", sm: "center", md: "center", lg: "space-between" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
              fontWeight="400"
              lineHeight="1"
              textAlign={{ base: "left", sm: "center", md: "left", lg: "left" }}
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
              <ButtonSoftPrimary mt={{ base: "1.5rem", sm: "1.75rem", md: "1.75rem", lg: "0" }} colorScheme="blue">Solicitar Orçamento</ButtonSoftPrimary>
            </Link>
          </PageHeaderDefault>
        </Section>
        <BaseContainer>

          <SectionHeading title="Explorar categorias" mb="3rem">
            <Link href="/orcamento">
              <Button variant="link" colorScheme="blue" fontWeight="400">ver mais</Button>
            </Link>
          </SectionHeading>

          <Box w="100%" maxW={{ xl: "1366px" }} px="20px">
            {/* Service mini cards */}
            <HStack
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              spacing={6}
              className="fenzo-services"
              mb="2rem"
              overflowX={{ base: "hidden", sm: "scroll", md: "scroll", lg: "scroll", xl: "visible" }}
            >
              {services && services.map((service, index) => (
                <Service key={index} project={service} />
              ))}
            </HStack>
          </Box>
          <Box w="100%" maxW={{ xl: "1366px" }} px="20px" pb="8rem">
            <SimpleGrid columns={{ base: 4, sm: 1, md: 2, lg: 4 }} spacing={4} mt={8}>
              {services && services.map((service, index) => (
                <ServiceSingle index={index} key={service.id} service={service} />
              ))}
            </SimpleGrid>
          </Box>
        </BaseContainer>
      </BaseLayout>
      <FooterFull />
    </>
  )
}

export default PageServices;
