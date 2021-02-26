import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react'

const MobileMenuButton = ({ label, icon, ...rest }) => {
  return (
    <Box
      as="button"
      fontWeight="500"
      color={useColorModeValue("blue", "blue.100")}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop='1px'
      borderColor={useColorModeValue("gray.200", "blue.600")}
      height='100%'
      py={4}
      px={2}
      userSelect="none"
      {...rest}
    >
      {icon}
      <Text as="span">
        {label}
      </Text>
    </Box>
  );
};

export default MobileMenuButton;
