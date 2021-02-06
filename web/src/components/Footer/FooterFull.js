import styled from '@emotion/styled'
import Link from 'next/link'
import { Box, Divider, Flex, Text, Image, Icon, Link as ChakraLink } from '@chakra-ui/react'
import theme from '../../../styles/theme'
import Container from '../../components/Layouts/Container'
import LogoFooter from '../../assets/logo/fenzo-logo-unfilled.svg'
import CallActionMenu from '../../components/CallActionMenu'
import { BusinessHours } from '../OpeningHours'

//
// Footer - originally borrowed from : https://github.com/Eronmmer/chakra-landing/blob/master/src/sections/footer.js
//

const Socials = ({ imagePath, href }) => {
  return (
    <ChakraLink href={href} isExternal>
      <Image
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
  const { href, children } = props
  return (
    <ChakraLink href={href} d="flex" mb=".5rem" {...props}>
      {children}
    </ChakraLink>
  );
};

const Body = styled(Text)`
  font-family: Inter;
  font-weight: normal;
  color: ${theme.colors.brand.background_on};
`;

const GreyCaption = styled(Text)`
  color: grey;
`
const footerItemMarginX = "32px";
const footerItemMarginY = ["16px", "16px", "16px", 0];

const FooterLinkAlt = styled(Link)`
  font-family: soleil;
  font-weight: normal;
  font-size: 12px;
  color: ${theme.colors.gray['50']};
`

const FooterText = styled(Body)`
  font-size: 12px;
`

const Button = styled.button`
  color: turquoise;
`

//
// Footer Component
//
const FooterFull = () => {
  return (
    <Box
      pt="3rem"
      pb="2rem"
      px="0"
      mt={{ base: 0, md: "4rem" }}
      backgroundColor="BlackAlpha.200" // #F9F9FB
      as="footer"
    >
      <Container>
        <Flex
          borderBottom="1px solid #c4c4c4"
          pb="3rem"
          mb="2.5rem"
          justify="space-between"
          direction={{ base: "column", md: "column", lg: "row" }}
          gridRowGap="2rem"
        >
          <Box flex="1.4">
            <Box width="85%">
              <Flex>
                <Box d="flex" w="100%" justifyContent="start" alignItems="center" mb="1.5rem">
                  <ChakraLink href="/" mr={4}>
                    <Icon as={LogoFooter} w="128px" h="auto" fill="brand.dark_blue" />
                  </ChakraLink>
                  <CallActionMenu />
                </Box>
              </Flex>
              <Text mb="2.5rem" color="gray.600">
                Somos especialistas em serralheria em alumínio de alto padrão.
                Conte com a Fenzo para entregar o melhor em qualidade, elegância e bem estar.
							</Text>
              <Text color="gray.600">
                ©2021 Fenzo Serralheria. Todos direitos reservados
							</Text>
            </Box>
          </Box>

          <Box flex=".7">
            <Text mb="1.5rem" fontWeight="600">
              Funcionamento
						</Text>
            <BusinessHours />
          </Box>

          <Box flex=".7">
            <Text mb="1.5rem" fontWeight="600">
              A Fenzo faz
						</Text>
            <FooterLink href="#!" color="brand.gray_dark">Solicitar Orçamento</FooterLink>
            <FooterLink href="#!">Agendar visita técnica</FooterLink>
            <FooterLink href="#!">FAQs</FooterLink>
          </Box>
          <Box flex=".7">
            <Text mb="1.5rem" fontWeight="600">
              Seguir
						</Text>
            <FooterLink href="#!">Facebook</FooterLink>
            <FooterLink href="#!">Instagram</FooterLink>
            <FooterLink href="#!">Google</FooterLink>
          </Box>
        </Flex>
        <Flex justify="center" align="center">
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
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterFull;
