import React from 'react'
import Link from 'next/link'
import {
  Box,
  FlexProps,
  Flex,
  Text,
  Image,
  IconProps,
  Icon as ChakraIcon,
  Button,
  Divider,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react'

import Container from '../../components/Layouts/Container'
import SectionShape from '../../components/Section/SectionShape'
import LogoFooter from '../../assets/logo/fenzo-logo-unfilled.svg'
import { LogoSimple } from '../../components/Logo/Logo'
import CallActionMenu from '../../components/CallActionMenu/'
import OpeningHours from '../../components/OpeningHours/BisHours'
import { FacebookLogo, InstagramLogo, GoogleLogo, WhatsappLogo } from 'phosphor-react'
import { FacebookSquare, GoogleSquare } from '../../components/Icon/IconsMixed'
//
// Footer - originally borrowed from : https://github.com/Eronmmer/chakra-landing/blob/master/src/sections/footer.js
//

const Socials = ({ imagePath, href }) => {
  return (
    <ChakraLink href={href} isExternal>
      <Image
        color={useColorModeValue("gray.800", "gray.200")}
        transition=".3s ease-out"
        _hover={{ transform: "scale(1.2)" }}
        mr=".7rem"
        cursor="pointer"
        src={imagePath}
      />
    </ChakraLink>
  );
};

const FooterLink = (props) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} passHref>
      <ChakraLink
        display="block"
        variant="link"
        fontWeight="400"
        mb={3}
        color={useColorModeValue("fenzodark.600", "gray.600")}
        _hover={{ color: useColorModeValue("gray.600", "gray.500") }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

const SocialIcon = (props) => {
  const { href, icon, ...rest } = props;
  return (
    <ChakraLink
      href={href}
      isExternal
      cursor="pointer"
      transition=".3s ease-out"
      _hover={{ transform: "scale(1.2)" }}
      mr=".7rem"
      _last={{ mr: "0", ml: ".7rem" }}
      {...rest}
    >
      <ChakraIcon
        as={icon}
      />
    </ChakraLink>
  );
};

export const FooterBottom = (props) => {
  const { href, children } = props
  const year = new Date().getFullYear();
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      className="footer-bottom"
    >
      <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center">
        <Text color={useColorModeValue("gray.600", "gray.700")}>
          © {year} Fenzo Serralheria. Todos direitos reservados
      </Text>
      </Box>
      <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center">
        <Socials
          href="#!"
          imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/twitter.svg"
        />
        <Socials
          href="#!"
          imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/facebook.svg"
        />
        <Socials
          href="#!"
          imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/instagram.svg"
        />
        <Socials
          href="#!"
          imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/linkedin.svg"
        />
        <Socials
          href="#!"
          imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/youtube.svg"
        />
      </Box>
    </Flex>
  );
};

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 1;
//     max-width: 1366px;
//     margin: 0 auto;

//
// Footer Component
//
const FooterFull = (props) => {

  const sectionShapeColor = useColorModeValue("gray.100", "fenzodark.700");
  const date = new Date().getFullYear();

  return (
    <>
      <Box as="section" position="relative">
        <SectionShape type="curve" color={sectionShapeColor} />
      </Box>
      <Box
        as="footer"
        position="relative"
        display="block"
        pt="3rem"
        pb="3rem"
        px="0"
        mt={0}
        bg={useColorModeValue("gray.100", "fenzodark.700")} // #F9F9FB
      >
        <Container>
          <Flex
            flex="1"
            justify="space-around"
            direction={{ base: "column", md: "column", lg: "row" }}
            w="100%"
            borderBottom="1px solid"
            borderColor={useColorModeValue("bluegray.50", "blue.900")}
            pb="2rem"
            mb="2rem"
            gridRowGap="2rem"
          >
            <Box flex="1.4">
              <Box width="85%">
                <Flex>
                  <Box d="flex" flexFlow="row wrap" w="100%" className="call-action-wrapper" justifyContent="flex-start" alignItems="center" mb="1.5rem">
                    <LogoSimple
                      url="/"
                      cursor="pointer"
                      color={useColorModeValue("blue.500", "subtleblue.700")}
                      width="132px"
                      height="auto"
                      maxW="132px"
                      mt={1}
                      mr={2}
                    />
                    <CallActionMenu mt={{ base: 0, sm: "1.2rem", md: 0, lg: 0 }}/>
                  </Box>
                </Flex>
                <Text mb="2.5rem" color={useColorModeValue("bluegray.700", "whiteAlpha.600")}>
                  Somos especialistas em serralheria em alumínio de alto padrão.
                  Conte com a Fenzo para entregar o melhor em qualidade, elegância e bem estar.
							</Text>
              </Box>
            </Box>

            <Box flex=".7">
              <Text color={useColorModeValue("bluegray.700", "whiteAlpha.800")} fontWeight="600" mb="1.5rem">
                Funcionamento
						  </Text>
              <OpeningHours />
            </Box>

            <Box flex=".7">
              <Text color={useColorModeValue("bluegray.700", "whiteAlpha.800")} fontWeight="600" mb="1.5rem">
                A Fenzo faz
						</Text>
              <FooterLink href="/orcamento">Solicitar Orçamento</FooterLink>
              <FooterLink href="/visita-tecnica">Agendar visita técnica</FooterLink>
              <FooterLink href="#!">FAQs</FooterLink>
            </Box>

            <Box flex=".7">
              <Text color={useColorModeValue("bluegray.700", "whiteAlpha.800")} fontWeight="600" mb="1.5rem">
                Seguir
						  </Text>
              <FooterLink href="https://www.facebook.com/fenzoserralheria/" isExternal={true}>Facebook</FooterLink>
              <FooterLink href="https://www.instagram.com/fenzoserralheria/" isExternal={true}>Instagram</FooterLink>
              <FooterLink href="https://g.page/fenzoFaz?share" isExternal={true}>Google</FooterLink>
            </Box>

          </Flex>

          <Flex w="100%" justify="space-between" align="center" className="footer-bottom">
            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center">
              <Text color={useColorModeValue("gray.600", "gray.700")}>
                © {date} Fenzo Serralheria. Todos direitos reservados
							</Text>
            </Box>
            <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center">
              <SocialIcon
                href="https://www.facebook.com/fenzoserralheria"
                alt="Siga a fenzo no Facebook"
                color={useColorModeValue("gray.800", "gray.200")}
                w="24px"
                h="auto"
                icon={() => <FacebookSquare />}
              />

              <SocialIcon
                href="https://www.instagram.com/fenzoserralheria"
                alt="Seguir no Instagram"
                color={useColorModeValue("gray.800", "gray.200")}
                w="24px"
                h="auto"
                icon={() => <InstagramLogo weight="duotone" width={32} height={32} />}
              //GoogleSquare
              />

              <SocialIcon
                href="https://g.page/fenzoFaz"
                alt="A Fenzo no Google"
                color={useColorModeValue("gray.800", "gray.200")}
                w="24px"
                h="auto"
                icon={() => <GoogleSquare />}
              />

              {/* <Socials
                href="#!"
                imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/twitter.svg"
              />
              <Socials
                href="#!"
                imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/facebook.svg"
              />
              <Socials
                href="#!"
                imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/instagram.svg"
              />
              <Socials
                href="#!"
                imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/linkedin.svg"
              />
              <Socials
                href="#!"
                imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/youtube.svg"
              /> */}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default FooterFull;
