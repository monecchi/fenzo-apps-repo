import React, { Component } from "react";
import Slider from "react-slick";

// Slick Carousel Default Styles
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

// Custom slick-theme.css
//import '../slick-theme.css';
//import SlickThemeCustomStyles from '../styles/slick-theme-custom' // jsx styles overrides custom slick-theme.css
//import styles from '../slick-theme.module.css'

import { SliderNextButton, SliderPrevButton } from '../NavButtons/SliderButtons';

// Slider Content Component
import SliderHomeContent from '../SliderContent';

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
const HomeSlider = () => {
  return (
    <React.Fragment>
      <div className="home_slider flex-container">
        <Slider {...settings} className="fenzo_home_slider slider-dark">
          <div className="slider-item">
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
          </div>

          <div className="slider-item">
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
          </div>

          <div className="slider-item">
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
          </div>

          <div className="slider-item">
            <div className="slider-content">
              <h3>3</h3>
            </div>
          </div>

          <div className="slider-item">
            <div className="slider-content">
              <h3>4</h3>
            </div>
          </div>
        </Slider>
      </div>
      <style jsx>{`

      `}</style>
    </React.Fragment>
  )

}

export default HomeSlider;
