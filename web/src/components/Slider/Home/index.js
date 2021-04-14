import React from 'react'
import Slider from 'react-slick'
import FlexContainer from '../../../components/Layouts/FlexContainer'
import { Box } from '@chakra-ui/react'

// Slider next / prev Buttons
import { SliderNextButton, SliderPrevButton } from '../NavButtons/SliderButtons'

//
// Slider Content Component
//
import SliderHomeContent from '../SliderContent'

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  centerMode: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      }
    },
  ],
  nextArrow: <SliderNextButton />,
  prevArrow: <SliderPrevButton />,
};

//
// Home Slider
// style={{backgroundImage: `url(${"https://falcon.technext.it/static/media/1-2.ee9d7fdf.jpg"})`}}  <h1 style={{color: "#fff"}}>Portões de Alumínio</h1>
//

//
// Home Slider Component
//
const HomeSlider = () => {
  return (
    <>
      <FlexContainer
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
        maxW="1366px"
        m={{ base: "2.5rem auto 0 auto", sm: "1.25rem auto 0 auto", md: "1.85rem auto 0 auto", lg: "2.5rem auto 0 auto" }}
        className="home_slider flex-container"
      >
        <Slider {...settings} className="fenzo_home_slider slider-dark">

          <SliderHomeContent
            id="portao-aluminio-slide"
            title="Seu portão elegante e durável"
            upperTitle="Portões de alumínio"
            subtitle="A Fenzo faz ®"
            image="/portoes-aluminio-hero-default.png"
            url="/servico/portoes-de-aluminio/"
            hasButton={true}
            hasImage={true}
            cssClass=""
          />

          <SliderHomeContent
            id="guarda-corpo-slide"
            title="Guarda corpo em alumínio e vidro temperado"
            upperTitle="Guarda Corpo"
            subtitle="Modernidade e requinte"
            image="/guarda-corpo-vidro-by-fenzo.png"
            url="/servico/portoes-de-aluminio/"
            hasButton={true}
            hasImage={true}
            cssClass=""
          />

          <SliderHomeContent
            id="chamada-slide"
            title="Guarda corpo em alumínio e vidro temperado"
            upperTitle="Guarda Corpo"
            subtitle="Modernidade e requinte"
            image=""
            url="/servicos"
            hasButton={false}
            hasImage={false}
            cssClass=""
          />

        </Slider>
      </FlexContainer>
      <style jsx>{`

      `}</style>
    </>
  )

}

export default HomeSlider;
