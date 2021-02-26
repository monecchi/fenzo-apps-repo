import {
  Box,
  Button,
  ButtonProps,
  useColorModeValue
} from '@chakra-ui/react'

export const ButtonPrimary = (props: ButtonProps) => {
  return (
    <Button
      color="white"
      borderWidth="2px"
      borderColor="blue.500"
      borderRadius="4px"
      bg="blue.500"
      _hover={{
        color: "white",
        bg: "blue.500",
        borderColor: "blue.500",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}
      _active={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600"
      }}
      _focus={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600",
        outline: "0",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}

      {...props}
    >
      {props.children}
    </Button>
  )
};

export const ButtonSoftPrimary = (props: ButtonProps) => {
  return (
    <Button
      color="blue.500"
      borderWidth="2px"
      borderColor="blue.50"
      borderRadius="4px"
      bg="blue.50"
      _hover={{
        color: "white",
        bg: "blue.500",
        borderColor: "blue.500",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}
      _active={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600"
      }}
      _focus={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600",
        outline: "0",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}

      {...props}
    >
      {props.children}
    </Button>
  )
};

export const ButtonSoftSuccess = (props: ButtonProps) => {
  return (
    <Button
      color="#36b37e"
      borderWidth="2px"
      borderColor="#d7f0e5"
      borderRadius="4px"
      bg="#d7f0e5"
      _hover={{
        color: "white",
        bg: "#36b37e",
        borderColor: "#36b37e",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)","0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)")
      }}
      _active={{
        color: "white",
        bg: "#36b37e",
        borderColor: "#36b37e"
      }}
      _focus={{
        color: "white",
        bg: "#2c8f5d",
        borderColor: "#36b37e",
        outline: "0",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)","0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)")
      }}

      {...props}
    >
      {props.children}
    </Button>
  )
};

export const ButtonPrimaryWhite = (props: ButtonProps) => {
  return (
    <Button
      color="blue.500"
      borderWidth="2px"
      borderColor="white"
      borderRadius="4px"
      bg="white"
      _hover={{
        color: "white",
        bg: "blue.500",
        borderColor: "blue.500",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}
      _active={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600"
      }}
      _focus={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600",
        outline: "0",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}

      {...props}
    >
      {props.children}
    </Button>
  )
};

export const ButtonPrimaryOutline = (props: ButtonProps) => {
  return (
    <Button
      color={useColorModeValue("blue.500", "blue.100")}
      borderWidth="2px"
      borderColor={useColorModeValue("blue.500", "blue.100")}
      borderRadius="4px"
      bg="trasparent"
      _hover={{
        color: "white",
        bg: "blue.500",
        borderColor: "blue.500",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}
      _active={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600"
      }}
      _focus={{
        color: "white",
        bg: "blue.600",
        borderColor: "blue.600",
        outline: "0",
        shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)","0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)")
      }}

      {...props}
    >
      {props.children}
    </Button>
  )
};;

export const ButtonOutlineWhite = (props: ButtonProps) => {
  return (
    <Button
      color="blue"
      borderWidth="2px"
      borderColor="blue"
      borderRadius="4px"
      bg="trasparent"
      _hover={{ color: "white", bg: "blue", shadow: "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)" }}
      _active={{ color: "white", bg: "blue.600", borderColor: "blue.600" }}
      _focus={{ color: "white", bg: "blue.600", borderColor: "blue.600", outline: "0", shadow: "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)" }}
      {...props}
    >
      {props.children}
    </Button>
  )
};
