import { nextPrismicLoader } from '../../constants'
import Image from '../Image'
import { Box, Image as ChakraImage } from '@chakra-ui/react'

export const SkewedImagePrismic = ({ src, alt, width, height, loader, layout, objectFit }) => {

  return (
    <Box>
      <Image
        loader={nextPrismicLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit || 'unset'}
      />
    </Box>
  )
}

export const SkewedImage = ({ src, alt, width, height, objectFit, skew_direction }) => {

  if(!skew_direction) {
    skew_direction = 'left' // right
  }
  return (
    <div>
      <Box className={`img-skewed img-skewed-${skew_direction}`} cursor='pointer'>
        <ChakraImage
          src={src}
          alt={alt}
          width={width}
          height={height || 'auto'}
          maxW="130%"
          objectFit={objectFit || 'unset'}
          borderRadius=".625rem"
          boxShadow="25px 60px 125px -25px rgb(80 102 144 / 10%), 16px 40px 75px -40px rgb(0 0 0 / 20%)"
          className='img-perspective'
          data-aos={`img-skewed-item-${skew_direction}`}
          data-aos-delay={100}
        />
      </Box>
      <style jsx global>
        {`
          .img-skewed {
            perspective: 1500px;
            transform-style: preserve-3d;
          }

          .img-skewed-left {
            perspective-origin: left center;
          }

          .img-skewed-left .img-skewed-item {
              transform: rotateY(-35deg) rotateX(15deg);
              backface-visibility: hidden;
          }

          .img-skewed-right {
              perspective-origin: right center;
          }

          .img-skewed-right .img-skewed-item {
              transform: rotateY(35deg) rotateX(15deg);
              backface-visibility: hidden;
          }

          /* reverse perspective */
          .img-skewed:hover .img-skewed-left, .img-skewed:hover .img-skewed-right, .img-skewed:hover .img-perspective {
            transform: rotateY(0deg) rotateX(0deg);
          }

          [data-aos=img-skewed-item-left],[data-aos=img-skewed-item-right] {
              opacity: 0;
              transition-property: opacity,transform,-webkit-transform;
              will-change: opacity,transform,-webkit-transform;
              backface-visibility: hidden;
          }

          [data-aos=img-skewed-item-left].aos-animate,[data-aos=img-skewed-item-right].aos-animate {
              opacity: 1;
          }

          [data-aos=img-skewed-item-left] {
              transform: rotateY(-20deg) rotateX(5deg) translate3d(0,100px,0);
          }

          [data-aos=img-skewed-item-left].aos-animate {
              transform: rotateY(-35deg) rotateX(15deg) translate3d(0,0,0);
          }

          [data-aos=img-skewed-item-right] {
              transform: rotateY(20deg) rotateX(5deg) translate3d(0,100px,0);
          }

          [data-aos=img-skewed-item-right].aos-animate {
              transform: rotateY(35deg) rotateX(15deg) translate3d(0,0,0);
          }
        `}
      </style>
    </div>
  )
}

// border-radius: .625rem;
// box-shadow: 25px 60px 125px -25px rgb(80 102 144 / 10%), 16px 40px 75px -40px rgb(0 0 0 / 20%);

export default SkewedImage;
