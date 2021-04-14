
import React, { useState, useEffect, useCallback } from "react";
import Head from 'next/head'
import theme from '../../../styles/theme'
import {
  BoxProps,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  CloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../../components/Section'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import SectionShape from '../../components/Section/SectionShape'
import SectionHeading from '../../components/Section/SectionHeading'
import { Receipt, Wallet, CurrencyDollarSimple } from 'phosphor-react'
import FooterFull from '../../components/Footer/FooterFull'


const serviceSelect = [
  {
    label: 'Fabricação em Alumínio',
    name: 'fabricacao-aluminio'
  },
  {
    label: 'Alumínio e Vidro Temperado',
    name: 'aluminio-vidro-temperado'
  },
  {
    label: 'Portão Automático',
    name: 'portao-automatico'
  }
]

const PriceBox = ({ value, prefix }, props) => {

  const shadowColor = useColorModeValue("245 248 250 / 50%", "126 131 150 / 15%") // {`0.5rem 0.5rem 0 rgb(${shadowColor} / 50%)`}
  const shadow = `0.5rem 0.5rem 0 rgb(${shadowColor})`
  const priceColor = useColorModeValue("blue.800", "whiteAlpha.800")

  return (
    <Flex
      display="flex"
      flex="1 1 auto"
      p="2rem"
      bg={useColorModeValue("white", "fenzodark.700")}
      borderWidth="1px"
      borderColor="rgba(0,0,0,.125)"
      borderRadius=".625rem"
      boxShadow={shadow}
      {...props}
    >
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Text mb="1rem" fontSize="sm" color={useColorModeValue("gray.500", "whiteAlpha.500")}>Meu orçamento</Text>
        <Heading as="h3" display="flex" color={priceColor}>
          <Text as="span" fontSize="md" color={priceColor} className="currency-prefix" mr=".375rem" pb="2rem">{prefix}</Text>
          {value}
        </Heading>
      </Box>
    </Flex>
  )
}

//
// Orcamento - Pre Sales Form Page
//
const Orcamento = () => {

  const [budgetCount, setBudgetCount] = useState(5000)

  const [isOpen, setIsOpen] = useState(true)

  const inputColor = useColorModeValue("gray.50", "gray.100")
  const inputPlaceholderColor = useColorModeValue("gray.500", "gray.600")
  const inputBg = useColorModeValue("gray.100", "fenzodark.700")

  const toggleShow = useCallback(
    () => {
      setIsOpen(!isOpen)
    }, [isOpen]
  )

  useEffect(() => {
    setBudgetCount(budgetCount.toLocaleString('pt-BR', {currency: 'BRL'}))
  }, [budgetCount])

  return (
    <>
      <Head>
        <title>Solicite seu orçamento</title>
      </Head>
      <BaseLayout>
        <Section
          flexDirection="column"
          bg={useColorModeValue("#EFF2F5", "#000b37")}
          full={true}
          className="page_header__section"
        >
          <PageHeaderDefault
            direction="column"
            justify="center"
          >
            <Receipt size={48} color="blue" weight="duotone" style={{ marginBottom: "1rem", alignSelf: "center" }} />
            <Heading
              as="h1"
              fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
              fontWeight="400"
              lineHeight="1"
              textAlign="center"
              className="tight-text"
            >
              Solicitar orçamento
            </Heading>
            <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="brand.blue" mt="1rem">Seu projeto com a Fenzo</Heading>
          </PageHeaderDefault>

          <SectionShape
            type="curve"
            color={useColorModeValue("white", "blue.900")}
          />
        </Section>

        <Section flexDirection="column" pt="4rem" pb="10rem" full>
          <Box w="100%" display="flex" maxW={{ xl: "1366px" }} px={{ base: "4", md: "4", lg: "4" }} display={isOpen ? "flex" : "none"}>
            <Alert
              status="info"
              variant="subtle"
              colorScheme="blue"
              bg={useColorModeValue("blue.25", "#000b37")}
              mt="2rem"
              px="20px"
              borderRadius="4px"
            >
              <Box
                display="flex"
                flex="1"
                flexDirection={{ base: "row", sm: "column", md: "column", lg: "row" }}
                justifyContent={{ base: "flex-start", sm: "center", md: "center", lg: "flex-start" }}
                alignItems="center"
              >
                <AlertIcon />
                <AlertTitle>Vem pra Fenzo!</AlertTitle>
                <AlertDescription display="block">
                  Comece hoje mesmo seu projeto em alumínio! Retornaremos muito em breve com mais detalhes.
              </AlertDescription>
              </Box>
              <CloseButton type="button" position="absolute" right="8px" top="8px" _focus={{ outline: "0" }} onClick={toggleShow} />
            </Alert>
          </Box>
          <Box as={"form"} mt={10}>

            <Container
              as={SimpleGrid}
              width="100%"
              maxW="1366px"
              justify="center"
              align="center"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 4, lg: 8 }}
              m="0 auto"
              py={{ base: 4, sm: 2, lg: 6 }}

            >
              <Stack spacing={6} width="100%">

                <SimpleGrid columns={{ base: 2, sm: 1, md: 2, lg: 2 }} spacing={8}>
                  <FormControl id="name">
                    <FormLabel>Seu Nome</FormLabel>
                    <Input
                      type="text"
                      placeholder="Nome"
                      color={inputColor}
                      bg={inputBg}
                      border={0}
                      _placeholder={{
                        color: inputPlaceholderColor
                      }}
                      size={"lg"}
                      borderRadius="4px"
                    />
                  </FormControl>

                  <FormControl id="telephone">
                    <FormLabel>Seu Telefone</FormLabel>
                    <Input
                      type="number"
                      placeholder="+55 (__) _____-____"
                      color={inputColor}
                      bg={inputBg}
                      border={0}
                      _placeholder={{
                        color: inputPlaceholderColor
                      }}
                      size={"lg"}
                      borderRadius="4px"
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl id="email">
                  <FormLabel>Seu Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="email@meumail.com"
                    color={inputColor}
                    bg={inputBg}
                    border={0}
                    _placeholder={{
                      color: inputPlaceholderColor
                    }}
                    size={"lg"}
                    borderRadius="4px"
                  />
                  <FormHelperText align="right">Não compartilhamos seu email</FormHelperText>
                </FormControl>

                <FormControl id="verba">
                  <FormLabel>Investimento disponível (opcional)</FormLabel>
                  <FormHelperText align="left">
                    A sua margem de investimento ajuda a definir as tecnologias, matéria-prima, e atributos de acabamento do seu projeto em alumínio. Estipule aqui se desejar.
                    </FormHelperText>

                  <Slider flex="1" aria-label="slider-verba-1" min={0} max={10000} defaultValue={budgetCount} onChange={(value) => { setBudgetCount(value) }} focusThumbOnChange={false} my="1rem">
                    <SliderTrack bg="blue.100">
                      <SliderFilledTrack bg="blue.500" />
                    </SliderTrack>
                    <SliderThumb width="32px" height="32px" _focus={{ borderWidth: "1px", borderColor: "blue.500", outline: "0" }}>
                      <Wallet size={22} weight="bold" color="#0336FF" />
                    </SliderThumb>
                  </Slider>
                  <PriceBox
                    prefix="R$"
                    value={budgetCount}
                  />
                </FormControl>

              </Stack>

              <Stack spacing={6} width="100%">

                <FormControl id="tiposervico">
                  <FormLabel>Tipo de serviço</FormLabel>
                  <Select
                    label="Um label"
                    placeholder="Selecionar Serviço"
                    color={inputColor}
                    bg={inputBg}
                    border={0}
                    _placeholder={{
                      color: inputPlaceholderColor
                    }}
                    size={"lg"}
                    borderRadius="4px"
                  >
                    {serviceSelect && serviceSelect.map((serviceItem, index) => (
                      <option key={serviceItem.name}>{serviceItem.label}</option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl id="tiposervico">
                  <FormLabel>Detalhes sobre o seu projeto</FormLabel>
                  <FormHelperText align="left" mb={4}>
                    Nos conte um pouco sobre o seu projeto... Conte-nos sobre estilos, medidas, cores,
                    e tudo aquilo que só você sabe para deixar a fabricação do seu projeto em alumínio
                    e vidro temperado, mais sofisticado, funcional e elegante.
                    </FormHelperText>
                  <Textarea
                    placeholder="Sua Mensagem"
                    color={inputColor}
                    bg={inputBg}
                    border={0}
                    _placeholder={{
                      color: inputPlaceholderColor
                    }}
                    size="lg"
                    minH="210px"
                    borderRadius="4px"
                    resize="vertical"
                  />
                </FormControl>

                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="whatsapp-alerts" mb={2}>
                    Responda no meu WhatsApp
                      </FormLabel>
                  <Switch id="whatsapp-alerts" size="md" />
                </FormControl>

                <Button
                  fontFamily={"heading"}
                  fontWeight={"400"}
                  size="lg"
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, blue.400,blue.500)"
                  color={"white"}
                  _active={{
                    bgGradient: "linear(to-r, blue.600,blue.700)"
                  }}
                  _hover={{
                    bgGradient: "linear(to-r, blue.500,blue.600)",
                    boxShadow: "xl"
                  }}
                  transition={"box-shadow .25s ease,transform .25s ease"}
                >
                  Enviar
                  </Button>

              </Stack>

            </Container>
          </Box>

        </Section>
      </BaseLayout>
      <FooterFull />
    </>
  )
}

export default Orcamento;
