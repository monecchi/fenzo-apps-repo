import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react"; // iconmoon-react
//import { iconList } from "icomoon-react"; // iconmoon-react iconList for debugging

// import own icons selection.json
import iconSet from "./selection.json";

interface PropsIcon {
  color: string;
  icon: string;
  size: string | number;
  className?: string | any;
}

const Icon = (props: PropsIcon) => {
    const { color, size, icon, className = '' } = props;
    return (
        //console.log(iconList(iconSet)),
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
}

Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
}

Icon.defaultProps = {
    color: "#8492A6",
    size: 20
}

export default Icon;
