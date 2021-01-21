import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import './Home/fenzo-home-slider.css'

interface ISliderContent {
  id: string;
  upperTitle: string;
  title: string;
  subtitle: string,
  hasImage: boolean,
  hasButton: boolean;
  image: string;
  url: string;
  cssClass?: string | any;
}

const SliderHomeContent = (props: ISliderContent) => {

  const router = useRouter();

  const sliderData = props;

  const { id, title, upperTitle, subtitle, hasImage, image, hasButton, url, cssClass } = props;

  // Portões de alumínio | upperTitle
  // Seu portão elegante e durável | title
  // A Fenzo faz ® | subtitle

  const slideBackground = hasImage != false || image ? { backgroundImage: `url(${image})` } : { backgroundImage: 'none' }

  const bgCover = image ? 'fenzo-slider bg-cover' : 'fenzo-slider'

  const noBg = !image ? ' no-bg' : null;

  return (
    <>
      {url && hasButton ? (
        <div className="fenzo-slider__wrapper" key={id}>
          <div className={bgCover} style={slideBackground}>
            {hasImage && (
              <div className="slider-overlay"></div>
            )}
            <div className="fenzo-slider__content fadeInSlideUp">
              <h4 className="info-heading fenzo-slider__title_upper mt-0">{upperTitle}</h4>
              <h1 className="info-heading fenzo-slider__title">{title}</h1>
              <h3 className="info-heading fenzo-slider__subtitle font-weight-bolder" style={{ marginBottom: '1.5rem' }}>{subtitle}</h3>
              {url && hasButton && (
                <button className="btn btn--default btn--white fenzo-slider__button" onClick={() => router.push(`${url}`)}>ver serviço</button>
              )}
            </div>
          </div>
        </div>
      ) : (
          <Link href={`${url}`}>
            <a className="d-flex w-100">
              <div className={"fenzo-slider__wrapper" + noBg} key={id}>
                <div className={bgCover} style={slideBackground}>
                  {hasImage && (
                    <div className="slider-overlay"></div>
                  )}
                  <div className="fenzo-slider__content fadeInSlideUp">
                    <h4 className="info-heading fenzo-slider__title_upper mt-0">{upperTitle}</h4>
                    <h1 className="info-heading fenzo-slider__title">{title}</h1>
                    <h3 className="info-heading fenzo-slider__subtitle font-weight-bolder" style={{ marginBottom: '1.5rem' }}>{subtitle}</h3>
                    {hasButton && (
                      <button className="btn btn--outline" onClick={() => router.push(`${url}`)}>serviço</button>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )}
    </>
  )

}

export const fzSliderWrapper: React.FC<JSX.Element> = ({ children }) => {
  return (
    <div className="fenzo-slider__wrapper">
      {children}
    </div>
  )
}

export default SliderHomeContent;
