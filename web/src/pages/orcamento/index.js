
import React, { useState } from "react";
import Head from 'next/head'
import theme from '../../../styles/theme'
import {
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
  useDisclosure
} from '@chakra-ui/react'
import Section from '../../components/Section'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import SectionHeading from '../../components/Section/SectionHeading'
import { Receipt, CurrencyDollarSimple } from 'phosphor-react'
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

//
// Orcamento - Pre Sales Form Page
//
const Orcamento = () => {

  const [questionsCount, setQuestionsCount] = useState(5000);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>Solicite seu orçamento</title>
      </Head>
      <BaseLayout>
        <Section bg="#EFF2F5" className="page_header__section" full={true} direction="column">
          <PageHeaderDefault
            direction="column"
            justify="center"
          >
            <Receipt size={48} color="blue" weight="duotone" align="center" style={{ marginBottom: "1rem" }} />
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
        </Section>

        <BaseContainer>
          <Box w="100%" maxW={{ xl: "1366px" }} px="20px">
            <Alert
              status="info"
              variant="subtle"
              colorScheme="blue"
              bg="blue.50"
              mt="2rem"
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
              <CloseButton type="button" position="absolute" right="8px" top="8px" _focus={{ outline: "0" }} onClick={()=>null} />
            </Alert>
          </Box>

          <Stack
            //p={{ base: 4, sm: 6, md: 8 }}
            //px="20px"
            spacing={{ base: 8 }}
            width="100%"
          >

            <Box as={"form"} mt={10}>

              <Container
                as={SimpleGrid}
                width="100%"
                maxW="1366px"
                justify="center"
                align="center"
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 4, lg: 4 }}
                m="0 auto"
                py={{ base: 4, sm: 2, lg: 6 }}

              >
                <Stack spacing={6} width="100%">

                  <SimpleGrid columns={{ base: 2, sm: 1, md: 2, lg: 2 }} spacing={3}>
                    <FormControl id="name">
                      <FormLabel>Seu Nome</FormLabel>
                      <Input
                        type="text"
                        placeholder="Nome"
                        bg={"gray.100"}
                        color={"gray.50"}
                        border={0}
                        _placeholder={{
                          color: "gray.500"
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
                        bg={"gray.100"}
                        color={"gray.50"}
                        border={0}
                        _placeholder={{
                          color: "gray.500"
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
                      bg={"gray.100"}
                      color={"gray.50"}
                      border={0}
                      _placeholder={{
                        color: "gray.500"
                      }}
                      size={"lg"}
                      borderRadius="4px"
                    />
                    <FormHelperText align="right">Não compartilhamos seu email</FormHelperText>
                  </FormControl>

                  <FormControl id="verba">
                    <FormLabel>Investimento disponível (opcional)</FormLabel>
                    <FormHelperText align="left">
                      A sua margem de investimento ajuda a definir as tecnologias, matéria-prima, a qualidade e durabilidade do seu projeto em alumínio. Defina aqui se desejar.
                    </FormHelperText>

                    <Slider flex="1" aria-label="slider-verba-1" min={0} max={10000} defaultValue={questionsCount} onChangeEnd={(value) => { setQuestionsCount(value) }} focusThumbOnChange={false} my="1rem">
                      <SliderTrack bg="blue.100">
                        <SliderFilledTrack bg="blue" />
                      </SliderTrack>
                      <SliderThumb width="32px" height="32px" _focus={{ borderWidth: "1px", borderColor: "blue", outline: "0" }}>
                        <CurrencyDollarSimple size={22} weight="bold" color="blue" />
                      </SliderThumb>
                    </Slider>
                    <FormHelperText align="left">
                      R$ {questionsCount}
                    </FormHelperText>
                  </FormControl>

                </Stack>

                <Stack spacing={4} width="100%">
                  <Input
                    placeholder="Seu Nome"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.50"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    size={"lg"}
                    borderRadius="0.35rem"
                  />
                  <Input
                    placeholder="email@meumail.com"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.50"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    size={"lg"}
                    borderRadius="0.35rem"
                  />
                  <Input
                    placeholder="+55 (__) _____-____"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.50"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    size={"lg"}
                    borderRadius="0.35rem"
                  />
                  <Textarea
                    placeholder="Sua Mensagem"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.50"}
                    _placeholder={{
                      color: "gray.500"
                    }}
                    size="lg"
                    borderRadius="0.35rem"
                    resize="vertical"
                  />
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="whatsapp-alerts" mb="0">
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
          </Stack>
        </BaseContainer>
      </BaseLayout>
      <FooterFull />
    </>
  )
}

export default Orcamento;
