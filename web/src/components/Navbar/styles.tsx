import styled from 'styled-components'
//import theme from '../../../styles/theme'

//const accentColor = `${theme.colors.brand.blue}`;
// ${accentColor};

//
// styled-components NavbarResponsive Component (dekstop navbar)
//

export const NavbarResponsive = styled.header.attrs((...props) => ({
}))`
  .responsive-header__logo {
    svg {
      width: 164px;
      height: 55px;
      max-height: 55px;
    }
  }

  .responsive-header__logo {
    &.icon-app {
      svg {
        max-height: 35px;
        path {
          color: #0033FF;
          fill: #0033FF;
        }
      }
    }
  }

  .responsive-header__toggle-menu .btn.btn--iconize .btn__icon {
    width: 36px;
    height: 36px;
  }

  .placeholder-current::placeholder {
    color: currentColor;
  }

  /* Navbar - only centered logo */
  .responsive-header {
    &.simple-header {
      .search-input {
        display: none;
      }
      .responsive-header__container {
        justify-content: center !important;
      }
      .responsive-header__wrapper-links {
        display: none;
      }
      .responsive-header__telephone {
        display: none;
      }
      .responsive-header__toggle-menu {
        display: none;
      }
    }
  }
`;
