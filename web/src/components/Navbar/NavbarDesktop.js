import React from 'react'
import Link from 'next/link'
import { Box, Button } from '@chakra-ui/react'

// Navbar responsive styles & component
//import styles from './navbar.module.scss' // styled components

import Logo from '../../assets/logo/fenzo-logo-cor-slogan.svg'
//import LogoNeutral from '../../assets/logo/fenzo-logo-unfilled.svg'
//import NavbarSearch from './Search/index'
import NavSearchApi from './SearchApi/index'
import NavbarNav from './NavigationMenu/index'
import NavbarTelephone from './Telephone/index'

// RestoPizza Icons set
import Icon from '../Icon/index'

const NavbarDesktop = (props) => {

  return (
    <header className="responsive-header simple-header">
      <div className="responsive-header__container">

        <div className={'responsive-header__logo'}>
          <Link href="/">
            <a className={"p-0 lh-0"} role="link" arial-label="Fenzo"><Logo /></a>
          </Link>
        </div>

        <NavSearchApi />

        <NavbarNav />

        <NavbarTelephone telephone="21 97646-8712" phoneNumber="976468712" />

        <div className="responsive-header__toggle-menu">
          <button className="btn btn--link btn--size-m btn--iconize" role="link" aria-label="Sidenav">
            <span className="icon-fenzo icon-fenzo--contato btn__icon">
              <Icon color="#1652F0" size={56} icon="fenzo-menu-icon-bold" />
            </span>
          </button>
        </div>

        {props.children}

      </div>
    </header>
  )
}

export default NavbarDesktop
