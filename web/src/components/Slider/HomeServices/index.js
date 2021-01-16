import React, { Component } from "react";
import Slider from "react-slick";

// Slick Carousel Default Styles
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

// Custom slick-theme.css
import '../slick-theme.css';

// Slider Content Component
import SliderHomeContent from '../SliderContent';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
  ]
};

//
// Home Slider
// style={{backgroundImage: `url(${"https://falcon.technext.it/static/media/1-2.ee9d7fdf.jpg"})`}}  <h1 style={{color: "#fff"}}>Portões de Alumínio</h1>

//
const ServiceSlider = () => {
  return (
    <>
    <div className="service_slider flex-container">
      <Slider {...settings} className="fenzo_home_slider slider-dark">
        <div className="slider-item">
          <SliderHomeContent />
        </div>

        <div className="slider-item">
          <img alt="Mars Image" className="img-responsive cover" src="https://raw.githubusercontent.com/solodev/text-animations-slick-slider/master/images/mars-mission.jpg" />
        </div>

        <div className="slider-item">
          <div className="slider-content">
            <h3>2</h3>
          </div>
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
    </>
  )

}

export default ServiceSlider;
