import styled from 'styled-components';

export const NavbarResponsive = styled.header.attrs(props => ({
  className: 'responsive-header',
}))`
  .responsive-header__logo {
    svg {
      width: auto;
      max-height: 55px;
    }
  }

  .responsive-header__logo {
    &.icon-app {
      svg {
        max-height: 35px;
        path {
          color: ${props => props.theme.colors.brand};
          fill: ${props => props.theme.colors.brand};
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

`;
