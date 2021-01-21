
import React from "react";
import { Flex } from "@chakra-ui/react";
import BaseContainer from '../../components/Layouts/BaseContainer'
import Navbar from '../../components/Navbar/Navbar'

const BaseLayout = (props) => {
  return (
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
  );
}

export default BaseLayout;
