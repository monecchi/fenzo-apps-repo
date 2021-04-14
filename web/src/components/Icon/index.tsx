import React from 'react'
import IcomoonReact from 'icomoon-react' // iconmoon-react
//import { iconList } from "icomoon-react"; // iconmoon-react iconList for debugging

// import own icons selection.json
import iconSet from './selection.json'

const Icon = ({
  color,
  size,
  icon
}) => {
  return (
    <IcomoonReact
      iconSet={iconSet}
      color={color}
      size={size.toString()}
      icon={icon}
    />
  );
}

Icon.defaultProps = {
  color: "currentColor"
}

export default Icon;
