
import React from "react";
import PropTypes from 'prop-types';
import { Flex } from "@chakra-ui/react";
//import BaseContainer from '../../components/Layouts/BaseContainer'
import Navbar from '../../components/Navbar/Navbar'

const BaseLayout = ({hasNavbar, ...props}) => {
  //const { hasNavbar } = props
  return (
    <>
      {hasNavbar ? (
        <>
          <Navbar />
          <Flex
            direction="column"
            align="center"
            m="0 auto"
            className="main-layout"
            {...props}
          >
            <div className="home-page">
              {props.children}
            </div>
          </Flex>
        </>
      ) : (
          <>
            <Flex
              direction="column"
              align="center"
              m="0 auto"
              className="main-layout"
              {...props}
            >
              <div className="home-page">
                {props.children}
              </div>
            </Flex>
          </>
        )
      }
    </>
  )
}

BaseLayout.propTypes = {
  hasNavbar: PropTypes.bool
};

BaseLayout.defaultProps = {
  hasNavbar: true
}

export default BaseLayout;
