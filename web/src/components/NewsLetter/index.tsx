import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Stack,
  Text,
  Icon,
  IconButton,
  FormControl,
  FormErrorMessage,
  Input,
  useColorModeValue
} from '@chakra-ui/react'
import { ButtonSoftPrimary } from '../../components/Buttons'
import { Newspaper } from 'phosphor-react'

type PersonSubscription = {
  email: string;
};

const NewsLetterSimple = () => {

  const { register, handleSubmit, errors, formState, reset } = useForm<PersonSubscription>({
    mode: 'onChange',
  });

  const inputColor = useColorModeValue("gray.50", "gray.100");
  const inputPlaceholderColor = useColorModeValue("gray.500", "gray.600");
  const inputBg = useColorModeValue("gray.100", "fenzodark.700");

  //
  // Simulate sending form data
  //

  const onSubmit = (data: PersonSubscription) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Box w="100%" mb={8}>
      <Box
        as="h6"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize="h6"
        mb={6}
      >
        Fique por dentro
          <Icon as={()=><Newspaper size={26} weight="duotone" color="currentColor" />} color="blue.500" />
      </Box>
      <Text fontSize="sm">Inscreva-se e fique por dentro dos novos artigos do blog e ofertas da Fenzo</Text>
      <Box as={"form"} id="contact-form" mt={10} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl id="email" isInvalid={errors.email ? true : false}>
            <Input
              variant="flushed"
              type="email"
              name="email"
              placeholder="Seu email"
              color={inputColor}
              boxShadow={useColorModeValue(`0px 1px 0px 0px var(--chakra-colors-gray-50)`, `0px 1px 0px 0pxvar(--chakra-colors-whiteAplha-800)`)}
              _placeholder={{
                color: "gray.500"
              }}
              size={"lg"}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'O email não parece válido!',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.type === "required" && ("Preencha o seu email")}
              {errors.email && errors.email.type === "pattern" && ("O email parece inválido")}
            </FormErrorMessage>
          </FormControl>
          <ButtonSoftPrimary
            type="submit"
            isLoading={formState.isSubmitting}
            loadingText="Enviando"
          >
            Inscrever-se
          </ButtonSoftPrimary>
        </Stack>
      </Box>
    </Box>
  )
}

export default NewsLetterSimple;
