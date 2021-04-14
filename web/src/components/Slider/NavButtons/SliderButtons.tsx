import { Button, useColorModeValue } from '@chakra-ui/react'

// RestoPizza Icons set
import Icon from '../../Icon/index';

//
// Custom Slick Slider Navigation Buttons
//


// Next Button
export const SliderNextButton = ({ currentSlide, slideCount, ...props }) => {
  const { onClick } = props

  const sliderButtonColor = useColorModeValue("blue.500", "whiteAlpha.500")
  const sliderButtonBgColor = useColorModeValue("white", "fenzodark.600")
  const sliderButtonBorderColor = useColorModeValue("rgba(72, 75, 119, 0.17)", "rgba(72, 75, 119, 0.17)")

  return (
    <Button
      position="absolute"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      color={sliderButtonColor}
      bg={sliderButtonBgColor}
      w="55px"
      h="55px"
      p="0"
      rounded="100px"
      borderWidth="1px"
      borderColor={sliderButtonBorderColor}
      transition="all .2s ease-in-out"
      _hover={{ color: sliderButtonColor, bg: sliderButtonBgColor, transform: "translate(0, -50%) scale(1.1)" }}
      _active={{ color: sliderButtonColor, bg: sliderButtonBgColor, opacity: 1 }}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      onClick={onClick}
      _disabled={{ opacity: 1 }}
      {...props}
    >
      <Icon color="currentColor" size={36} icon="chevron-right" />
    </Button>
  )
}

// Prev Button
export const SliderPrevButton = ({ currentSlide, slideCount, ...props }) => {
  const { onClick } = props

  const sliderButtonColor = useColorModeValue("blue.500", "whiteAlpha.500")
  const sliderButtonBgColor = useColorModeValue("white", "fenzodark.600")
  const sliderButtonBorderColor = useColorModeValue("rgba(72, 75, 119, 0.17)", "rgba(72, 75, 119, 0.17)")

  return (
    <Button
      position="absolute"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      color={sliderButtonColor}
      bg={sliderButtonBgColor}
      w="55px"
      h="55px"
      p="0"
      rounded="100px"
      borderWidth="1px"
      borderColor={sliderButtonBorderColor}
      transition="all .2s ease-in-out"
      _hover={{ color: sliderButtonColor, bg: sliderButtonBgColor, transform: "translate(0, -50%) scale(1.1)" }}
      _active={{ color: sliderButtonColor, bg: sliderButtonBgColor, opacity: 1 }}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      onClick={onClick}
      _disabled={{ opacity: 1 }}
      {...props}
    >
      <Icon color="currentColor" size={36} icon="chevron-left" />
    </Button>
  )
}
