import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../../components/Section'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import ScrollingImages from '../../components/Playground/ScrollingImages'
import { SkewedImage } from '../../components/Image/SkewedImage'
import { ColorPalette, ColorPalettes, ColorWrapper} from '../../components/Playground/ColorPallete'
import { ArrowLeft, StackSimple } from 'phosphor-react'

const images = [
  {
    src: "/images/casa-sala-portas-aluminio-guarda-corpo.jpg",
    alt: "",
    sx: { width: "450px" }
  },
  {
    src: "/images/guarda-corpo-vidro-residencia-casa.jpg",
    alt: "",
    sx: { width: "460px" }
  },
  {
    src: "/images/casa-vidro-temperado-ambiente-luz-2.jpg",
    alt: "",
    sx: { width: "624px" }
  }
]

const PlaygroundPage = () => (
  <BaseLayout direction="row">
    <Section bg={useColorModeValue("#EFF2F5", "#000b37")} className="page_header__section" full={true} direction="column">
      <PageHeaderDefault

        justifyContent="space-between"
      >
        <StackSimple size={48} color="blue" weight="duotone" style={{ marginBottom: "1rem", alignSelf: "center" }} />
        <Heading
          as="h1"
          fontSize={{ base: "32px", sm: "32px", md: "42px", lg: "54px" }}
          fontWeight="400"
          lineHeight="1"
          textAlign="center"
          className="tight-text"
        >
          Playground
        </Heading>
        <Heading as="span" d="block" fontSize="1rem" textTransform="uppercase" letterSpacing="0" color="brand.blue" mt="1rem">Fenzo componentes</Heading>

        <Box
          display="flex"
          flex="0 0 50%"
          maxW="50%"
        >
          <SkewedImage
            src="/porta-pivotante-de-aluminio.jpg"
            alt="Casa"
            width="100%"
            height="auto"
            objectFit="none"
            skew_direction="left"
          />
        </Box>


      </PageHeaderDefault>
    </Section>

    <Section>
      <Heading as="h5" fontSize="1.3rem" mt="2rem">Fenzo Blue</Heading>
      <ColorWrapper data-aos="fade-up" data-aos-delay={100}>
        <ColorPalettes color={"blue"} />
      </ColorWrapper>

      <Heading as="h5" fontSize="1.3rem" mt="2rem">Fenzo PaleBlue</Heading>
      <ColorWrapper data-aos="fade-up" data-aos-delay={100}>
        <ColorPalettes color={"paleblue"} />
      </ColorWrapper>

      <Heading as="h5" fontSize="1.3rem" mt="2rem">Fenzo SubtleBlue</Heading>
      <ColorWrapper data-aos="fade-up" data-aos-delay={100}>
        <ColorPalettes color={"subtleblue"} />
      </ColorWrapper>

      <Heading as="h5" fontSize="1.3rem" mt="2rem">Fenzodark</Heading>
      <ColorWrapper data-aos="fade-up" data-aos-delay={100}>
        <ColorPalettes color={"fenzodark"} />
      </ColorWrapper>
    </Section>

    <ScrollingImages pushSx={{ my: 5 }} numberOfCopies={4} duration={20}>
      {images.map((img) => (
        <Box key={`slider-image-${img.src}`} sx={{ mx: 4, ...img.sx }}>
          <Image
            {...img}
            sx={{
              height: "312px",
              objectFit: "cover",
              borderRadius: "md",
              opacity: "0.5",
              ...img.sx
            }}
          />
        </Box>
      ))}
    </ScrollingImages>
  </BaseLayout>
)

export default PlaygroundPage;
