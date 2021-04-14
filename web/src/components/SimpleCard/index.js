import React from 'react';
import { hrefResolver, linkResolver } from '../../../prismic-configuration'
import { RichText, Date as ParseDate } from 'prismic-reactjs'
//import Image from 'next/image'
import {
  forwardProps,
  HStack,
  VStack,
  Text,
  Tag,
  TagLabel,
  TagRightIcon,
  Box,
  AspectRatio,
  Link,
  Image as ChakraImage,
  useColorModeValue
} from '@chakra-ui/react';
import Image from '../Image';
import { usePalette } from 'react-palette';


const prismicLoader = ({ src, width, quality }) => {
  return `${src}&w=${width}&q=${quality || 75}`
}

const SimpleCard = ({
  name,
  platform,
  image,
  link,
  isAffiliate,
  description,
}) => {
  const { data, loading, error } = usePalette(image[0].thumbnails.large.url);

  return (
    <Link href={link}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="hidden"
          lineHeight={0}
          rounded="lg"
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Box
            bg={data.lightVibrant}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
          ></Box>
          {/* <ChakraImage
            src={image ? image[0].thumbnails.large.url : "/"}
            top={0}
            left={0}
            bottom={0}
            right={0}
            height={56}
            width={56}
            transform="scale(1.7)"
            filter="blur(13px) opacity(0.5);"
            layout="fixed"
            rounded="md"
            position="absolute"
          ></ChakraImage> */}
          <Image
            loader={prismicLoader}
            src={image ? image[0].thumbnails.large.url : "/"}
            height={36}
            width={36}
            layout="fixed"
            rounded="md"
          ></Image>
        </Box>

        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
        >
          <VStack spacing={0} align="start" flexGrow="1">
            <Text fontWeight="600" fontSize="md" color="brand.blue" noOfLines={2}>
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.200")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};

//
// Blog Article List Card
//
export const ArticleListCard = ({
  name,
  image,
  description,
  date,
  link
}) => {
  const { data, loading, error } = usePalette(image);

  return (
    <Link href={link}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "fenzodark.700")}
        rounded="md"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "fenzodark.600")}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="visible"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Box
            bg={data.lightVibrant}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
            rounded="lg"
          />
          <Image
            loader={prismicLoader}
            src={image}
            height={96}
            width={96}
            layout="fixed"
            borderRadius=".35rem"
          />
        </Box>

        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
        >
          <VStack spacing={0} align="start" flexGrow="1">
            <Text fontWeight="600" fontSize="md" color={useColorModeValue("fenzodark.500", "gray.400")} noOfLines={2}>
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.200")}
            >
              {description}
            </Text>
            <Text fontSize="xs" style={{ marginTop: "1rem" }} color={useColorModeValue("gray.500", "gray.400")}>
              {date}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};

export const SmallCard = ({
  name,
  link,
  icon,
  description,
}) => {
  //const { data, loading, error } = usePalette(image[0].thumbnails.large.url);

  return (
    <Link href={link} isExternal>
      <HStack
        spacing={4}
        justify="center"
        align="center"
        w="100%"
        p={4}
        rounded="md"
        bg={useColorModeValue("white", "fenzodark.700")}
        borderWidth="1px"
        borderColor={useColorModeValue("gray.200", "fenzodark.700")}
        textAlign="left"
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: useColorModeValue("0px 0.25rem 0.75rem 0px rgb(190 194 255 / 18%)", "0px 0.25rem 0.75rem 0px rgb(0 0 30 / 45%)") }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="hidden"
          lineHeight={0}
          rounded="lg"
        >
          {icon}
        </Box>

        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
        >
          <VStack spacing={0} align="start" flexGrow="1">
            <Text fontWeight="600" fontSize="md" color={useColorModeValue("blue.500", "blue.50")} noOfLines={2}>
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.200")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};

export default SimpleCard;
