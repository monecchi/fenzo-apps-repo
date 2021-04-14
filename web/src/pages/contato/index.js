import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import { useForm } from 'react-hook-form'
//import { resolve, reject } from 'lodash'
//import { sendEmail } from '../api/sendnow'
import theme from '../../../styles/theme'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Switch,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Icon,
  useToast,
  useColorMode,
  useColorModeValue
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
      zIndex={-1}
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

export const sendEmail = async (recipientMail, senderMail, senderName, senderPhone, content) => {
  const data = {
    recipientMail,
    senderMail,
    senderName,
    senderPhone,
    content
  }

  try {
    const res = await axios({
      method: "post",
      url: "/api/sendnow",
      headers: {
        "Content-Type": "application/json"
      },
      data
    })
    return res

  } catch (error) {
    return error
  }
}


//
// Contact Page
//
const Contato = () => {

  //const { register, handleSubmit, errors, formState } = useForm();

  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'onChange',
  });

  const toast = useToast();

  const { colorMode } = useColorMode();

  const inputColor = useColorModeValue("gray.50", "gray.100");
  const inputPlaceholderColor = useColorModeValue("gray.500", "gray.600");
  const inputBg = useColorModeValue("gray.100", "fenzodark.700");


  const successToast = () => {
    return toast({
      title: "Mensagem enviada.",
      description: "Recebemos sua mensagem.",
      status: "success",
      position: "top-right",
      duration: 9000,
      isClosable: true,
    })
  }

  const failedToast = () => {
    return toast({
      title: "Um erro ocorreu.",
      description: "Por favor conferir dados.",
      status: "error",
      position: "top-right",
      duration: 9000,
      isClosable: true,
    })
  }

  //const onSubmit = (data) => console.log(data);

  //
  // Simulate sending form data
  //

  // const onSubmit = (data, e) => {
  //   e.target.reset(); // reset after form submit
  //   alert(JSON.stringify(data));
  // };

  const onSubmitAPI = async (data, e) => {
    const recipientMail = "fenzoserralheria@gmail.com"
    const res = await sendEmail(recipientMail, data.email, data.name, data.telephone, data.message)
    if (res.status === 200) {
      console.log(res);
      setTimeout(() => {
        successToast();
      }, 500);
      e.target.reset(); // reset after form submit
    } else {
      setTimeout(() => {
        failedToast();
      }, 500);
    }
  }

  const onSubmit = (data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(data);
        resolve();
        successToast();
      }, 4000);
    });
  }

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
                  color={useColorModeValue("inherit", "whiteAlpha.800")}
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

              <Box as={"form"} id="contact-form" mt={10} onSubmit={handleSubmit(onSubmitAPI)}>
                <Stack spacing={4}>

                  <FormControl id="name" isInvalid={errors.name}>
                    <Input
                      name="name"
                      placeholder="Nome"
                      bg={inputBg}
                      border={0}
                      color={inputColor}
                      _placeholder={{
                        color: inputPlaceholderColor
                      }}
                      size={"lg"}
                      borderRadius="0.35rem"
                      ref={register({ required: true, minLength: 5, maxLength: 32 })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.type === "required" && "Preencha o seu nome"}
                      {errors.name && errors.name.type === "minLength" && "Nome muito curto, mín. de 5 caracteres"}
                      {errors.name && errors.name.type === "maxLength" && "Nome muito extenso, limite de 36 caracteres"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl id="email" isInvalid={errors.email}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="email@meumail.com"
                      bg={inputBg}
                      border={0}
                      color={inputColor}
                      _placeholder={{
                        color: "gray.500"
                      }}
                      size={"lg"}
                      borderRadius="0.35rem"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        }
                      })}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.type === "required" && "Preencha o seu email"}
                      {errors.email && errors.email.type === "pattern" && "O email parece inválido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl id="telephone" isInvalid={errors.telephone}>
                    <Input
                      type="tel"
                      name="telephone"
                      placeholder="+55 (__) _____-____"
                      bg={inputBg}
                      border={0}
                      color={inputColor}
                      _placeholder={{
                        color: inputPlaceholderColor
                      }}
                      size={"lg"}
                      borderRadius="0.35rem"
                      ref={register({ required: true, minLength: 10, maxLength: 11 })}
                    />
                    <FormErrorMessage>
                      {errors.telephone && errors.telephone.message}
                      {errors.telephone && errors.telephone.type === "required" && "Preencha seu telefone"}
                      {errors.telephone && errors.telephone.type === "minLength" && "Fatando dígitos, inclua também o DDD sem o número 0 na frente"}
                      {errors.telephone && errors.telephone.type === "maxLength" && "Dígitos em excesso, máximo de 11 caracteres já com o DDD"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl id="message" isInvalid={errors.message}>
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      bg={inputBg}
                      border={0}
                      color={inputColor}
                      _placeholder={{
                        color: inputPlaceholderColor
                      }}
                      size="lg"
                      borderRadius="0.35rem"
                      resize="vertical"
                      ref={register({ required: true, minLength: 80, maxLength: 500 })}
                    />
                    <FormErrorMessage>
                      {errors.message && errors.message.type === "required" && "É preciso escrever sua mensagem"}
                      {errors.message && errors.message.type === "minLength" && "Mensagem curta demais. Você quer mesmo nos dizer algo?"}
                      {errors.message && errors.message.type === "maxLength" && "Mensagem é longa demais, máximo de 500 caracteres"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="whatsapp-alerts" mb="0">
                      Responda no meu WhatsApp
                      </FormLabel>
                    <Switch id="whatsapp-alerts" name="whatsapp" size="md" ref={register} />
                  </FormControl>
                </Stack>
                <Button
                  type="submit"
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
                  isLoading={formState.isSubmitting}
                  loadingText="Enviando"
                >
                  Enviar
                  </Button>
              </Box>
            </Stack>
          </Container>
          {colorMode === "light" && (
            <Blur
              position={"absolute"}
              top={-10}
              left={-10}
              style={{ filter: "blur(70px)" }}
            />
          )}
        </BaseContainer>
      </BaseLayout>
      <FooterFull />
    </>
  );
};

export default Contato;
