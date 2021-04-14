import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react'

const MobileMenuButton = ({ label, icon, ...rest }) => {
  return (
    <VStack
      as="button"
      fontWeight="500"
      color={useColorModeValue("blue.500", "blue.100")}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop='1px'
      borderColor={useColorModeValue("gray.200", "blue.600")}
      height='100%'
      py={4}
      px={2}
      {...rest}
      color={useColorModeValue("blue.600", "blue.200")}
    >
      {icon}
      <Text
        fontSize="xs"
        fontWeight="400"
        color={useColorModeValue("gray.600", "gray.200")}
      >
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;
