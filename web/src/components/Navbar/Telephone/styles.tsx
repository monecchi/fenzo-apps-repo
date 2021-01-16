import styled from 'styled-components';

//
// Telefone Component Styles, override global.css
//
export const TelephoneComponent = styled.div.attrs(props => ({
  className: 'responsive-header__telephone',
}))`

  display: flex;
  flex-direction: row;
  align-items: center;

  .responsive-header__button {
    .btn__label {
      color: ${props => props.theme.colors.brand_alt} !important;
      font-weight: 600;
    }

   .icon-fenzo {
      margin: 0 10px 0 0;

      &.btn__icon {
          transform: scale(1.2) !important;
        }
    }

    .fenzo-phone-icon {
      &.animated {

      }
    }

    .fenzo-phone-icon path:nth-child(2) {
      animation: phone-ring 1s cubic-bezier(.1,.57,.5,1) infinite;
    }

    .fenzo-phone-icon path:nth-child(3) {
      animation: phone-ring2 1s cubic-bezier(.1,.57,.5,1) infinite;
    }
  }

  .btn {
    &.btn--link {
      svg {
        color: ${props => props.theme.colors.brand};
        fill: ${props => props.theme.colors.brand};
      }
    }
  }

  @media only screen and (min-width: 960px) {
    .btn {
      &.btn--size-l {
        .btn__label {
          font-size: 1.45rem;
        }
      }
    }
  }

  @keyframes phone-ring {
    0%,30% {
        opacity: 0;
        transform: translate3d(-20px,20px,0);
    }

    80% {
        opacity: 1;
        transform: translateZ(0);
    }

    to {
        opacity: 0;
    }
  }

  @keyframes phone-ring2 {
    0% {
        opacity: 0;
        transform: translate3d(-20px,20px,0)
    }

    70%,90% {
        opacity: 1;
        transform: translateZ(0);
    }

    to {
        opacity: 0;
    }
  }
`;

