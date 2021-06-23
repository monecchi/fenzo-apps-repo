import NextImage from 'next/image'
import { chakra } from '@chakra-ui/react'

const Image = chakra(NextImage, {
  baseStyle: { maxH: 'auto', maxW: 'auto' },
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'layout', 'objectFit', 'loader', 'skew_direction'].includes(prop),
});

export default Image;
