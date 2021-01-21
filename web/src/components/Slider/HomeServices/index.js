import React, { Component } from "react"
import Slider from "react-slick"
import { useServices } from '../../../util/hooks/useServices'

// Slick Carousel Default Styles (already imported on main slider)
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

// Custom slick-theme.css
//import '../slick-theme.css'
import './service-slider.scss'

import { Box, Image, Flex, Badge, Text, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

import Icon from '../../Icon'
import Link from 'next/link'


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
const ServiceSlider = () => {

  const { services, isLoading } = useServices()

  const mockItems = Array(6)

  const loading = true

  if (loading) {
    return (
      <div className="service_slider flex-container">
        <Slider {...settings} className="fenzo__service-slider">

          {mockItems.fill(0).map((item, index) => (
            <div className="slider-item" key={index}>
              <div className="service__slide" style={{ backgroundColor: "#F8F8FB" }}>
                <div className="slider-content" style={{ display: 'block'}} >
                  <SkeletonCircle size="10" style={{ borderRadius: '0.25rem' }} />
                  <SkeletonText mt="3" noOfLines={2} spacing="4" height="20px" />
                </div>
              </div>
            </div>
          ))}

        </Slider>
      </div>
    )
  }

  return (
    <>
      <div className="service_slider flex-container">
        <Slider {...settings} className="fenzo__service-slider">

          {services.map((service) => (
            <div className="slider-item" key={service.id}>
              <div className="service__slide" style={{ backgroundColor: service.color }}>
                <div className="slider-content">
                  <Icon icon={service.icon_name} size={42} color={service.icon_color} className="service__slider-icon" />
                  <h4 className="lh-0">{service.title}</h4>
                  <Text fontSize="sm" color="gray.800">{service.subtitle}</Text><Link href={`/servico/${service.slug}`}>ver mais</Link>
                </div>
              </div>
            </div>
          ))}

        </Slider>
      </div>
      <style jsx>{`

    `}</style>
    </>
  )

}

export default ServiceSlider;
