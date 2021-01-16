import React from 'react'

// RestoPizza Icons set
import Icon from '../../Icon';

const NavbarNav = () => {
  return (
    <div className="responsive-header__wrapper-links">
      <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Sobre" tabIndex={0} href="/">
        <span className="icon-fenzo icon-fenzo--promotion btn__icon">
          <Icon color="currentColor" size={24} icon="fenzo-logo-icon" />
        </span>
        <span className="btn__label">A Fenzo</span>
      </a>

      <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Entrar" tabIndex={0} href="/servicos">
        <span className="icon-fenzo icon-fenzo--sign-in btn__icon">
          <Icon color="currentColor" size={24} icon="log-in" />
        </span>
        <span className="btn__label">Serviços</span>
      </a>

      <a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="link" aria-label="Contato" tabIndex={0} href="/contato">
        <span className="icon-fenzo icon-fenzo--contato btn__icon">
          <Icon color="currentColor" size={24} icon="mail" />
        </span>
        <span className="btn__label">Contato</span>
      </a>

    </div>
  )
}

export default NavbarNav;
