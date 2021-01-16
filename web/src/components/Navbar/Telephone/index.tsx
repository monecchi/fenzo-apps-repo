import React from 'react'

import { TelephoneComponent } from './styles'

// RestoPizza Icons set
import Icon from '../../Icon';

interface ITelephone {
  telephone: String,
  phone_number: Number
}

const NavbarTelephone: React.FC<ITelephone> = (props) => {
  const { telephone, phone_number } = props;

  return(
    <TelephoneComponent>
      <a className="btn btn--link btn--size-l btn--iconize responsive-header__button h-auto" role="link" aria-label="Entrar" tabIndex={0} href={'tel://'+phone_number}>
        <span className="icon-fenzo icon-fenzo--telephone btn__icon">
          {/*<Icon color="currentColor" size={24} icon="phone-call" />*/}
          <svg version="1.1" id="phone" className="fenzo-phone-icon animated" fill="currentColor" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 82 82" xmlSpace="preserve">
            <path d="M64.5,78.2c1.7-1.9,3.6-3.6,5.4-5.4c2.6-2.7,2.7-5.9,0-8.6c-3.1-3.2-6.3-6.3-9.4-9.4 c-2.6-2.6-5.8-2.6-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-0.1,0.1-0.3,0.2-0.4,0.3l-1.3,1.3c-0.4,0.2-0.7,0.2-1.2,0 c-1.3-0.7-2.6-1.2-3.8-2c-5.7-3.6-10.5-8.2-14.7-13.4c-2.1-2.6-4-5.3-5.3-8.4c-0.2-0.5-0.2-0.9,0.1-1.3l1.3-1.3 c0.1-0.1,0.1-0.2,0.2-0.3c0.6-0.6,1.2-1.1,1.8-1.7c1.4-1.3,2.7-2.7,4.1-4.1c2.7-2.7,2.7-5.9,0-8.6c-1.5-1.5-3.1-3.1-4.6-4.6 c-1.6-1.6-3.2-3.2-4.8-4.8c-2.6-2.5-5.8-2.5-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-1.9,1.8-2.8,3.9-3,6.5c-0.3,4.1,0.7,8,2.1,11.8 C5.2,43.8,9.6,50.7,15,57.1c7.2,8.6,15.9,15.4,26,20.4c4.6,2.2,9.3,3.9,14.4,4.2C58.9,81.8,62,81,64.5,78.2z" />
            <path d="M41.1,15.7 c-0.7,0-1.5,0.1-2.2,0.4c-1.7,0.8-2.5,2.8-2,4.8c0.4,1.8,2,3,3.9,3c4.6,0.1,8.6,1.5,12,4.6c3.7,3.4,5.4,7.7,5.6,12.8 c0,0.9,0.4,1.9,0.9,2.6c1.1,1.5,3,1.9,4.8,1.2c1.6-0.6,2.5-2,2.5-3.9c-0.1-7-2.6-12.9-7.5-18.1C54.1,18.4,48.1,15.8,41.1,15.7z" />
            <path d="M69,11.4c8.5,8.7,12.5,18.1,12.8,29.1c0.1,2.5-1.5,4.2-3.9,4.3c-2.6,0.1-4.3-1.4-4.4-4c-0.1-5.4-1.4-10.5-4-15.2 C63.5,14.9,54.2,9.3,42,8.6c-1.4-0.1-2.6-0.2-3.6-1.3c-1.2-1.4-1.3-3-0.7-4.6c0.7-1.6,2-2.4,3.8-2.4c8,0.1,15.3,2.4,22,6.8 C65.7,8.6,67.8,10.4,69,11.4z" />
          </svg>
        </span>
        <span className="btn__label font-weight-bolder">{telephone}</span>
      </a>
    </TelephoneComponent>
  )
}

export default NavbarTelephone;
