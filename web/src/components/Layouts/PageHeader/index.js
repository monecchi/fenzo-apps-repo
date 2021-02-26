
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

  //   width: 100%;
  //   max-width: 1366px;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;

export const PageHeaderDefault = (props) => {
  const { cssClass } = props
  return (
    <Flex
      w="100%"
      maxW={{ xl: "1366px" }}
      m="0 auto"
      //direction={{ base: "column", sm: "column", md: "column", lg: "row" }} // flexDirection
      align="center" // alignItems
      //justify={{ base: "space-between", sm: "center", md: "center", lg: "space-between" }} // justifyContent
      p={{ base: "80px 20px 60px 20px", sm: "60px 20px 60px 20px", md: "80px 20px 60px 20px", lg: "60px 20px 80px 20px" }}
      className={cssClass ? "page-header__container " + title.toLowercase() + "__container" : "page-header__container"}
      {...props}
    >
      {props.children}
    </Flex>
  );
}
