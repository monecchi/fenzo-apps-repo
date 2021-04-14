import React, { Fragment } from "react"
import Link from 'next/link'
import Slider from "react-slick"
import { useServices } from '../../../hooks/useServices'

import FlexContainer from '../../../components/Layouts/FlexContainer'

import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Badge,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue
} from '@chakra-ui/react';

import Icon from '../../Icon'

//
// Slick Slider Settings
//
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
  slidesToShow: 5, // comment out if ininite is set to false
  slidesToScroll: 4,
  draggable: true,
  centerMode: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

//
// Home Slider
// style={{backgroundImage: `url(${"https://falcon.technext.it/static/media/1-2.ee9d7fdf.jpg"})`}}  <h1 style={{color: "#fff"}}>Portões de Alumínio</h1>
// {/*<Link href={`/servico/${service.slug}`}>ver mais</Link>*/}

//
// Services Slider Component
//
const ServiceSlider = () => {

  const { services, isLoading } = useServices()

  const skeletonBgColor = useColorModeValue("#F6F9FD", "fenzodark.800")
  const skeletonStartColor = useColorModeValue("#A6AFC5", "#1F2744")
  const skeletonEndColor = useColorModeValue("#A6AFC5", "#49536B")
  const titleColor = useColorModeValue("blue.800", "#000b37")
  const subtitleColor = useColorModeValue("blue.800", "blue.800")

  const mockItems = Array(6)

  const loading = true

  if (!services) {
    return (
      <>
        <FlexContainer
          m="3rem auto 0 auto"
          className="service_slider"
        >
          <Slider {...settings} className="fenzo__service-slider">

            {mockItems.fill(1).map((_, index) => (
              <Box className="slider-item" key={index}>
                <Box className="service__slide" bg={skeletonBgColor}>
                  <Box className="slider-content">
                    <SkeletonCircle startColor={skeletonStartColor} endColor={skeletonEndColor} size="10" borderRadius="0.25rem" />
                    <SkeletonText noOfLines={2} spacing={4} h="1rem" startColor={skeletonStartColor} endColor={skeletonEndColor} mt="3" />
                  </Box>
                </Box>
              </Box>
            ))}

          </Slider>
        </FlexContainer>
      </>
    )
  }

  return (
    <>
      <FlexContainer
        m="3rem auto 0 auto"
        className="service_slider"
      >
        <Slider {...settings} className="fenzo__service-slider">

          {services.map((service) => (
            <Box className="slider-item" key={service.id}>
              <Box className="service__slide" bg={service.color}>
                <Box className="slider-content">
                  <Icon icon={service.icon_name} size={42} color={service.icon_color} />
                  <Heading as="h5" size="sm" color={titleColor} mt="1rem" mb="0">{service.title}</Heading>
                  <Text fontSize="sm" color={subtitleColor}>{service.subtitle}</Text><Link href={`/servico/${service.slug}`}>ver mais</Link>
                </Box>
              </Box>
            </Box>
          ))}

        </Slider>
      </FlexContainer>
    </>
  )

}

export default ServiceSlider;
