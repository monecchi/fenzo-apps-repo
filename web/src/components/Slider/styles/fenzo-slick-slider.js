//
// Fenzo Custom Slick Slider Styles
//
import React from 'react'
const FenzoSlickSlider = () => (
  <style jsx>
    {`
    .flex-container {
      display: flex;
      flex-grow: 1;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      max-width: 1366px;
      margin: 50px auto 30px auto;
      padding: 0 20px;
    }

    .slick-slider {
      width: 100%;
      max-width: 1366px;
      height: 172px;
      text-align: center;
      background: #fafafa;
      box-shadow: 0 .125rem .25rem rgba(31,45,61,.08) !important;
    }

    .slider-item img {
      display: flex;
      width: 100%;
      max-width: 100%;
      height: 172px;
      object-fit: cover;
    }

    @media only screen and (min-width: 960px) {
      .flex-container {
        margin: 50px auto;
      }
      .slick-slider {
        height: 448px;
      }
      .slider-item img {
        width: 100%;
        height: 448px;
      }
    }

    .slider-item {
      display: flex !important;
      justify-content: center;
      align-items: center;
      width: 100% !important;
      height: 100%;
      max-width: 1366px;
    }

    .slider-overlay {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #3340FF;
      opacity: 0.3;
    }

    .slick-list {
      -webkit-border-radius: .35rem;
      border-radius: .35rem;
    }

    .slick-slider, .slick-track, .slick-list, .slick-track {
      display: flex !important;
    }

    .fit-cover {
      object-fit: cover;
    }

    .slick-slider .info {
      color: white;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      line-height: 100vh;
      text-align: center;
      z-index: 10;
    }

    .slick-slider .info > div {
      display: inline-flex !important;
    }

    .slick-slider, .slick-track, .slick-list, .slick-track {
      display: flex !important;
      width: 100%;
    }

    /** Slider Text Animation **/

    @-webkit-keyframes fadeInUpSD {
      0% {
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
      }

      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes fadeInUpSD {
      0% {
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
      }

      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    .fadeInUpSD {
      -webkit-animation-name: fadeInUpSD;
      animation-name: fadeInUpSD;
    }

    .slick-active .slide-content {
      animation-name: fadeInUpSD;
      animation-duration: 1s;
      opacity: 1;
      width: 100%;
      padding: 10px 20px 30px 0;
    }

    /* Home Slider */
    .fenzo_slider__wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      background: transparent;
      width: 100%;
      max-width: 1366px;
      height: 448px;
      margin: auto;
      margin-top: 3rem;
      margin-bottom: 3rem;
      padding: 0 20px;
      overflow: hidden;
    }

    .fenzo_slider__wrapper.no-bg {
      width: auto;
    }

    .slider-item .fenzo_slider__wrapper {
      padding: 0;
      margin-top: auto;
      margin-bottom: auto;
    }

    .fenzo_slider {
      position: relative;
      display: flex;
      flex-grow: 1;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #ffffff;
    }

    .fenzo_slider__arrow-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
      cursor: pointer;
      color: #1652F0;
      background: #fff;
      border-radius: 50%;
      border: 1px solid rgba(72,75,119,0.17);
      outline: none;
      transition: all .2s ease-in-out;
      transform: scale(1);
    }

    .fenzo_slider__arrow-button:hover {
      color: #3340FF;
      transform: scale(1.1);
    }

    .fenzo_slider__content {
      text-align: left;
      justify-self: flex-start;
      padding: 20px 0 20px 80px;
      z-index: 100;
    }

    .fenzo_slider__content .info-heading, .fenzo_slider__content .btn {
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
    }

    .fenzo_slider__title_upper {
      text-transform: uppercase;
      font-weight: 300 !important;
      letter-spacing: .035rem;
    }

    .fenzo_slider__title {
      max-width: 70%;
    }

    .fenzo_slider.bg_cover {
      background-image: url("http://localhost:3000/portoes-aluminio-hero-default.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 50%;
    }

    .fenzo_slider.bg_cover .fenzo_slider__content .info-heading {
      color: #fff !important;
    }

    .fadeInSlideUp {
      animation-name: fadeInUpSD;
      animation-duration: 1s;
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      .fenzo_slider__wrapper {
          max-height: 180px;
      }

      .fenzo_slider__wrapper.no-bg {
        width: 100%;
      }

      .fenzo_slider__content {
          padding: 20px 0 20px 40px;
          max-height: 180px;
      }

      .fenzo_slider.bg_cover {
          background-position: 0 50%;
      }

      .fenzo_slider__title_upper {
          font-size: 85% !important;
          margin-bottom: 0.35rem !important;
      }

      .fenzo_slider__title {
          max-width: 72%;
          font-size: 1.5rem !important;
          line-height: 1.2;
          margin-top: 0.35rem !important;
          margin-bottom: 0.35rem !important;
      }

      .fenzo_slider__subtitle {
          font-size: 1rem !important;
          margin-bottom: 0 !important;
      }

      .fenzo_slider__content button {
        display: flex;
        justify-self: flex-end;
        align-self: flex-end;
        margin-left: auto;
        bottom: 35px;
        right: 25px;
      }

    }

    .slick-slider.slider-dark .slick-dots {
      bottom: 1.8rem;
    }

    .slick-slider.slider-dark .slick-dots li button:before {
        background:#ffffff;
    }

    .slick-slider.slider-dark .slick-dots li.slick-active button:before {
        color: #ffffff;
    }

    /* Service Slider */
    .service_slider {
      position: relative;

      .slick-slide {
        background-color: #F8F8FB;
        width: 300px !important;
        max-height: 150px !important;
        min-height: 150px;
      }

      .service__slide {
        width: 300px;
        height: 150px;
        margin-right: 15px;
        border-radius: .25rem !important;
      }

      .service__slider-icon {
        margin-bottom: 1.5rem;
      }

      .slider-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding: 1rem;
        height: 150px;

      }

      .slick-slide>div {
        width: 300px !important;
      }

      .slick-slider {
        text-align: left !important;
        height: 150px !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .slick-slider .slick-slide {
        margin-right: 15px;
      }

      .slider-item {
        display: inline-block !important;
        justify-content: space-around !important;
        width: 300px !important;
        min-width: 300px !important;
        height: 150px !important;
      }

      .slick-list {
        border-radius: 0 !important;
      }
    }

    @media only screen and (min-width: 960px) {
      .service_slider {
        .slick-slider {
          height: 150px !important;
        }
      }
    }
  `}
  </style>
)

export default FenzoSlickSlider
