import React from 'react'

const FancyButton = React.forwardRef((props, ref: React.LegacyRef<HTMLButtonElement>) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Você agora pode obter a ref diretamente para o button do DOM:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;