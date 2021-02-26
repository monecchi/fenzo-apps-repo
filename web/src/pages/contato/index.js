import React from 'react'
import Head from 'next/head'
import theme from '../../../styles/theme'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Form,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Switch,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Icon
} from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import FooterFull from '../../components/Footer/FooterFull'

const avatars = [
  {
    name: "Potões de alumínio",
    url: "https://bit.ly/ryan-florence"
  },
  {
    name: "Telhado de vidro",
    url: "https://bit.ly/sage-adebayo"
  },
  {
    name: "Pergolados",
    url: "https://bit.ly/kent-c-dodds"
  },
  {
    name: "Guarda corpo vidro temperado",
    url: "https://bit.ly/prosper-baba"
  }
];

export const Blur = (props) => {
  return (
    <Icon
      width={{ base: "100%", md: "40vw", lg: "30vw" }}
      zIndex={{ base: -2, md: -1, lg: 0 }}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill={theme.colors.blue["400"]} />
      <circle cx="244" cy="106" r="139" fill={theme.colors.white} />
      <circle cy="291" r="139" fill={"#EFF2F5"} />
      <circle cx="80.5" cy="189.5" r="101.5" fill={theme.colors.blue["50"]} />
      <circle cx="196.5" cy="317.5" r="101.5" fill={"#EFF2F5"} />
      <circle cx="70.5" cy="458.5" r="101.5" fill={theme.colors.blue["100"]} />
      <circle cx="426.5" cy="-0.5" r="101.5" fill={theme.colors.blue["100"]} />
    </Icon>
  );
};

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
            <Container
              as={SimpleGrid}
              width="100%"
              maxW="1366px"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 10, lg: 32 }}
              py={{ base: 10, sm: 10, lg: 32 }}
              px="20px"
            >
              <Stack spacing={{ base: 10, md: 20 }} zIndex={1} maxW={["100%", "100%", "80%", "80%"]}>
                <Heading
                  lineHeight={1.1}
                  fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
                >
                  Contato{" "}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, blue.500,blue.100)"
                    bgClip="text"
                  >
                    &
                  </Text>{" "}
                  Localização
                  <Text d="block" as="span" fontSize="1.2rem" fontWeight="400" my="1.2rem">Clientes felizes, projetos incríveis, a Fenzo faz®</Text>
                </Heading>
                <Stack direction={"row"} spacing={8} align={"center"}>
                  <AvatarGroup size="lg">
                    {avatars.map((avatar) => (
                      <Avatar
                        key={avatar.name}
                        name={avatar.name}
                        src={avatar.url}
                        size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                        position={"relative"}
                        color="white"
                        zIndex={2}
                        _before={{
                          content: '""',
                          width: "full",
                          height: "full",
                          rounded: "full",
                          transform: "scale(1.125)",
                          bgGradient: "linear(to-bl, blue.500,blue.100)",
                          position: "absolute",
                          zIndex: -1,
                          top: 0,
                          left: 0
                        }}
                      />
                    ))}
                  </AvatarGroup>
                  <Text
                    fontFamily={"heading"}
                    fontSize={{ base: "4xl", md: "6xl" }}
                  >
                    =
                  </Text>
                  <Flex
                    align={"center"}
                    justify={"center"}
                    fontFamily={"heading"}
                    fontSize={{ base: "sm", md: "lg" }}
                    bg={"brand.blue.200"}
                    color={"white"}
                    rounded={"full"}
                    width={{ base: "44px", md: "60px" }}
                    height={{ base: "44px", md: "60px" }}
                    position={"relative"}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, blue.500,blue.100)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0
                    }}
                  >
                    Fenzo
                  </Flex>
                </Stack>
              </Stack>
              <Stack
                rounded={"xl"}
                p="0" // {{ base: 4, sm: 6, md: 8 }}
                spacing={{ base: 8 }}
                maxW={{ lg: "lg" }}
              >
                <Stack spacing={4}>
                  <Heading
                    color={"gray.800"}
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  >
                    Fale com a gente
                    <Text
                      as={"span"}
                      bgGradient="linear(to-r, blue.500,blue.100)"
                      bgClip="text"
                    >
                      !
                    </Text>
                  </Heading>
                  <Text color={"gray.50"} fontSize={{ base: "sm", sm: "md" }}>
                    Para solicitações gerais, preencha abaixo e em breve entraremos em contato. Traga o seu projeto para a Fenzo, precisa de um orçamento?
                  </Text>
                </Stack>
                <Box as={"form"} mt={10}>
                  <Stack spacing={4}>
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
                  </Stack>
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
                </Box>
              </Stack>
            </Container>
            <Blur
              position={"absolute"}
              top={-10}
              left={-10}
              style={{ filter: "blur(70px)" }}
            />
        </BaseContainer>
      </BaseLayout>
      <FooterFull />
    </>
  );
};

export default Contato;
