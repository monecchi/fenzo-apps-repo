import React from 'react'
import { Box, Tag, WrapItem } from '@chakra-ui/react'

const InterestTag = ({ name, like }) => {
  return (
    <WrapItem>
      <Tag
        size="lg"
        variant="subtle"
        colorScheme={like ? "blue" : "red"}
        bg={like ? "blue.50" : "red.100"}
        rounded="lg"
      >
        {name}
      </Tag>
    </WrapItem>
  );
};

export default InterestTag;
