import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

import { ButtonPrimary, ButtonPrimaryWhite } from '../../components/Buttons'

//import './Home/fenzo-home-slider.css'
//import styles from './Home/fenzo-home-slider.module.css'

interface ISliderContent {
  id: string;
  upperTitle: string;
  title: string;
  subtitle: string,
  hasImage: boolean,
  hasButton: boolean;
  image: string;
  url: string;
  cssClass?: string | any;
}

const SliderHomeContent = (props: ISliderContent) => {

  const router = useRouter();

  const sliderData = props;

  const { id, title, upperTitle, subtitle, hasImage, image, hasButton, url, cssClass } = props;

  // Portões de alumínio | upperTitle
  // Seu portão elegante e durável | title
  // A Fenzo faz ® | subtitle

  const slideBackground = hasImage != false || image ? { backgroundImage: `url(${image})` } : { backgroundImage: 'none' }

  const bgCover = image ? 'fenzo_slider bg_cover' : 'fenzo_slider'

  const noBg = !image ? ' no-bg' : null;

  return (
    <>
      <Box className={'fenzo_slider__wrapper'} key={id}>
        <Box className={bgCover} style={slideBackground}>
          {hasImage && (
            <Box
              position="absolute"
              w="100%"
              h="100%"
              top="0"
              left="0"
              bg={useColorModeValue("blue.500", "#001350")}
              opacity={useColorModeValue("0.34", "0.55")}
              zIndex={0}
            />
          )}
          <Box
            zindex={1}
            className={'fenzo_slider__content'}
          >
            <Heading
              as="h5"
              color="white"
              fontSize={{ base: "h5", sm: "md" }}
              fontWeight="500"
              letterSpacing="wide"
              textTransform="uppercase"
              mt="0"
              mb={{ base: ".75rem", sm: ".45rem" }}
              className="slider__upper_title"
              data-aos="fade-up"
            >
              {upperTitle}
            </Heading>

            <Heading
              as="h1"
              color="white"
              fontSize={{ base: "h1", sm: "1.8rem", md: "h1", lg: "h1" }}
              maxW={{ base: "72%", sm: "75%" }}
              noOfLines={{ base: 3, sm: 2 }}
              //isTruncated
              className="info-heading slider__title"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              {title}
            </Heading>

            <Box
              as="h5"
              color="white"
              fontSize="lg"
              fontWeight="400"
              letterSpacing="wide"
              className="info-heading slider__subtitle font-weight-bolder"
              mb="1.5rem"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {subtitle}
            </Box>

            {url && hasButton && (
              <>
                <Box
                  position={{ base: "relative", sm: "absolute", md: "absolute", lg: "relative" }}
                  display="flex"
                  justifyContent={{ base: "flex-start", sm: "flex-end", md: "flex-start", lg: "flex-start" }}
                  w="100%"
                  right=".1rem"
                  className="slider_button"
                >
                  <ButtonPrimaryWhite
                    transition="all .2s ease"
                    _hover={{
                      bg: "blue.500",
                      color: "white",
                      borderColor: "blue.500",
                      transform: "translateY(-1px)",
                      boxShadow: "0px 0.25rem 0.75rem 0px rgb(0 5 74 / 18%)"
                    }}
                    _focus={{ boxShadow: "0px 0.25rem 0.75rem 0px rgb(0 5 74 / 18%)" }}
                    onClick={() => router.push(`${url}`)}
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    ver serviço
              </ButtonPrimaryWhite>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )

}

export const fzSliderWrapper: React.FC<JSX.Element> = ({ children }) => {
  return (
    <div className="fenzo_slider__wrapper">
      {children}
    </div>
  )
}

export default SliderHomeContent;
