import React from 'react'

// RestoPizza Icons set
import Icon from '../../Icon/index';

//
// Custom Slick Slider Navigation Buttons
//

// Next Button
export const SliderNextButton = (props) => {
  const { onClick } = props;
  return (
    <div className="fenzo_slider__next slick-next" onClick={onClick}>
      <button className="fenzo_slider__arrow-button fenzo_slider__next">
        <Icon color="currentColor" size={36} icon="chevron-right" />
      </button>
    </div>
  )
}

// Prev Button
export const SliderPrevButton = (props) => {
  const { onClick } = props;
  return (
    <div className="fenzo-slider__next slick-prev" onClick={onClick}>
      <button className="fenzo_slider__arrow-button fenzo_slider__next">
        <Icon color="currentColor" size={36} icon="chevron-left" />
      </button>
    </div>
  )
}
