import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useColorModeValue, useColorMode, useMediaQuery } from '@chakra-ui/react'

// Navbar responsive styles & component
import { NavbarResponsive } from './styles' // styled components
import NavbarMobile from '../../components/Navbar/NavbarMobile'

import Logo from '../../assets/logo/fenzo-logo-cor-slogan.svg'
//import LogoNeutral from '../../assets/logo/fenzo-logo-unfilled.svg'
//import NavbarSearch from './Search/index'
import NavSearchApi from './SearchApi/index'
import NavbarNav from './NavigationMenu/index'
import NavbarTelephone from './Telephone/index'
import ThemeToggle from '../../components/ThemeToggle'

// RestoPizza Icons set
import Icon from '../Icon/index'


const Navbar: React.FC = (props) => {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isLargerThan1280);
    console.log('screen size ' + isLargerThan1280);
  }, [])

  if (!isMobile) {
    return (
      <NavbarMobile isOpen={true} />
    )
  }

  return (
    <>
      <NavbarResponsive className={'responsive-header simple-header'}>
        <div className={'responsive-header__container'}>

          {/* Navbar Logo */}
          <div className={'responsive-header__logo'}>
            <Link href="/">
              <a className={"p-0 lh-0"} role="link" arial-label="Fenzo"><Logo /></a>
            </Link>
          </div>

          {/* Navbar Search Component*/}
          {/*<NavbarSearch />*/}

          {/* Navbar Search Component*/}
          <NavSearchApi />

          {/* Navbar Navigation Menu */}
          <NavbarNav />

          {/* Navbar Telephone Component */}
          <NavbarTelephone telephone={'21 97646-8712'} phoneNumber={'976468712'} />

          {/* Navbar Menu Toggle */}
          <div className="responsive-header__toggle-menu">
            <button className="btn btn--link btn--size-m btn--iconize" role="link" aria-label="Contato">
              <span className="icon-fenzo icon-fenzo--contato btn__icon">
                <Icon color="#1652F0" size={56} icon="fenzo-menu-icon-bold" />
              </span>
            </button>
          </div>
          <ThemeToggle mobile={false} />

          {/* Navbar Children */}
          {props.children}

        </div>
      </NavbarResponsive>
    </>
  )
}

export default Navbar;
