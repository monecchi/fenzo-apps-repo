import React from 'react'
import IcomoonReact from 'icomoon-react' // iconmoon-react
//import { iconList } from "icomoon-react"; // iconmoon-react iconList for debugging

// import own icons selection.json
import iconSet from './selection.json'

const Icon: React.FC<{
  color?: string,
  size: string | number,
  icon: string,
  className?: string,
  style?: React.CSSProperties
}> = props => {
  const { color, size = "100%", icon, className = "", style } = props;
  return (
    <IcomoonReact
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      className={className}
      style={style}
    />
  )
}

export default Icon;
