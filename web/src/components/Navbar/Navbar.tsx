import React from 'react'
import Link from 'next/link'

import { useDisclosure } from "@chakra-ui/react"

//import style from '../../../styles/Fenzo.module.css'

// Navbar responsive styles & component
import { NavbarResponsive } from './styles' // styled components

import Logo from '../../assets/logo/fenzo-logo-cor-slogan.svg'
import LogoNeutral from '../../assets/logo/fenzo-logo-unfilled.svg'
import NavbarSearch from './Search/index'
import NavSearchApi from './SearchApi/index'
import NavbarNav from './NavigationMenu/index'
import NavbarTelephone from './Telephone/index'

// RestoPizza Icons set
import Icon from '../Icon/index';


const Navbar: React.FC = ({children}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <NavbarResponsive>
        <div className={'responsive-header__container'}>

          {/* Navbar Logo */}
          <div className={'responsive-header__logo'}>
            <a href="/" role="link" arial-label="Fenzo" className={"p-0 lh-0"}><Logo /></a>
          </div>

          {/* Navbar Search Component*/}
          {/*<NavbarSearch />*/}

          {/* Navbar Search Component*/}
          <NavSearchApi />

          {/* Navbar Navigation Menu */}
          <NavbarNav />

          {/* Navbar Telephone Component */}
          <NavbarTelephone telephone={'21 3594-2652'} phone_number={35942652} />

          {/* Navbar Menu Toggle */}
          <div className="responsive-header__toggle-menu">
              <button className="btn btn--link btn--size-m btn--iconize" role="link" aria-label="Contato" onClick={onOpen}>
                <span className="icon-fenzo icon-fenzo--contato btn__icon">
                  <Icon color="#1652F0" size={56} icon="fenzo-menu-icon-bold" />
                </span>
              </button>
          </div>

          {/* Navbar Children */}
          {children}

        </div>
      </NavbarResponsive>
    </>
  )
}

export default Navbar
