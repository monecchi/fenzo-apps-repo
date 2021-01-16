import React from 'react'
import { useRouter } from 'next/router'

import './Home/fenzo-home-slider.css'

interface ISliderContent {
  id: Number;
  upperTitle: string;
  title: string;
  subtile: string,
  hasImage: boolean,
  hasButton: boolean;
  image: String;
  url: String;
  cssClass?: string | any;
}

const SliderHomeContent = (props: ISliderContent) => {

  const router = useRouter();

  const sliderData = props;

  const { id, title, upperTitle, subtile, hasImage, hasButton, url, cssClass } = props;

  return (
    <>
    <div className="fenzo-slider__wrapper">
      <div className={"fenzo-slider bg-cover"}>
        <div className="slider-overlay"></div>
        <div className="fenzo-slider__content fadeInSlideUp">
          <h4 className="info-heading fenzo-slider__title_upper mt-0">Portões de alumínio</h4>
          <h1 className="info-heading fenzo-slider__title">Seu portão elegante e durável</h1>
          <h3 className="info-heading fenzo-slider__subtitle font-weight-bolder" style={{ marginBottom: '1.5rem'}}>A Fenzo faz ®</h3>
          <button className="btn btn--default btn--white fenzo-slider__button" onClick={() => router.push('/servico/portoes-de-aluminio/')}>ver serviço</button>
        </div>
      </div>
    </div>
    </>
  )

}

export const fzSliderWrapper: React.FC<JSX.Element> = ({children}) => {
  return (
    <div className="fenzo-slider__wrapper">
      {children}
    </div>
  )
}

export default SliderHomeContent;
