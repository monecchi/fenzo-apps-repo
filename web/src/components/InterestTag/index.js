import React from 'react'
import customTheme from '../../../styles/theme'
import { Box, Tag, WrapItem, useColorModeValue } from '@chakra-ui/react'
import { getColor, transparentize } from '@chakra-ui/theme-tools'

const InterestTag = ({ name, like }) => {

  const tagDarkColor = getColor(customTheme, "blue.200", "#B1C2FF");
  const tagDarkBg = getColor(customTheme, "blue.200", "#B1C2FF");

  return (
    <WrapItem>
      <Tag
        size="lg"
        variant="subtle"
        color={like ? useColorModeValue("blue.700", transparentize(tagDarkColor, 0.7)) : useColorModeValue("red.700", "rgb(252 235 234 / 60%)")}
        bg={like ? useColorModeValue("blue.50", transparentize(tagDarkBg, 0.1)) : useColorModeValue("red.50", "rgb(254 215 215 / 18%)")}
        rounded="lg"
      >
        {name}
      </Tag>
    </WrapItem>
  );
};

export default InterestTag;
