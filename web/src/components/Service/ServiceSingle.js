//import React from 'react'
import {
  Box,
  Badge,
  Heading,
  Image,
  Img,
  Icon as ChakraIcon,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"

import Icon from '../../components/Icon'

//
// Image Fallback, solid color Box
//
const ImageBoxFallback = () => {
  return (
    <Box
      w='100%'
      minH='240px'
      bg={useColorModeValue("gray.100", "fenzodark.600")}
      borderTopLeftRadius='4px'
      borderTopRightRadius='4px'
    />
  )
}

//
// Single Service Component
//
const ServiceSingle = ({ index, service }) => {

  const { colorMode } = useColorMode()

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  //const hoverScaleTranslateY = 'translateY(-5px) scale(1.02)'

  const hoverScaleTranslateY = (T, S) => (
    `translateY(${T.toString()})` + `scale(${S.toFixed(2)})`
  )

  const loading = true

  return (
    <Box
      data-aos="fade-up"
      data-aos-delay={index * 100 + 100}
    >
      <Box
        cursor="pointer"
        maxW="sm"
        bg={useColorModeValue("white", "rgb(7 15 43 / 80%)")}
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "fenzodark.600")}
        borderRadius="4px"
        boxShadow={useColorModeValue("0px 2px 4px rgb(126 142 177 / 12%)", "default")}
        _hover={{ boxShadow: useColorModeValue("0px 5px 12px rgb(126 142 177 / 20%)", "md"), transform: `${hoverScaleTranslateY('-5px', 1.02)}` }}
        transition="box-shadow .25s ease,transform .25s ease"
        overflow="hidden"
      >
        <Image
          src={`${service.img_url}`}
          alt={service.upperTitle}
          width="100%"
          maxH="240px"
          minH="240px"
          borderTopLeftRadius="4px"
          borderTopRightRadius="4px"
          objectFit="cover"
          opacity={colorMode === "dark" ? "0.8" : "1"}
          fallback={loading ? <ImageBoxFallback /> : <></>}
        />

        <Box
          p="6"
          className="service-details"
          sx={{
            ".service-details .service-title &": {
              color: useColorModeValue("blue.500", "white"), transform: hoverScaleTranslateY("-3px", 1.1), transition: "all 0.25s ease",
            },
          }}
        >
          <Box d="flex" alignItems="baseline">
            {service.new ? (<Badge borderRadius="full" px="2" colorScheme="teal">Novo</Badge>) : (null)}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
          </Box>
          </Box>

          <Box
            mt="1"
            as="h5"
            fontSize="h5"
            fontWeight="semibold"
            lineHeight="tight"
            isTruncated
            className="service-title"
          >
            {service.title}
          </Box>

          <Box>
            {service.subtitle}
          </Box>

          {/* reviews */}
          {/* <Box d="flex" mt="2" alignItems="center" color={useColorModeValue("yellow.500", "yellow.200")}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <ChakraIcon key={i} as={() => <Icon icon="star" color="currentColor" size={22} />} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}

        </Box>
      </Box>
    </Box>
  )
}

export default ServiceSingle;
