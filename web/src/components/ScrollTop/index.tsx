import React, { useEffect, useState } from 'react'
import {
  Slide,
  SlideFade,
  Box,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowUp, ArrowCircleUp } from 'phosphor-react'

const TopScrollButton = () => {

  const [isVisible,setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isVisible) {
      document.getElementsByClassName('scroll-top-icon')[0].classList.remove('animate')
    } else {
      document.getElementsByClassName('scroll-top-icon')[0].classList.add('animate')
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [isVisible])

  return (
    <>
      <Box
        className="scroll-top"
      >
        <Box
          as='button'
          position='fixed'
          display='flex'
          justifyContent='center'
          alignItems='center'
          aria-label='Voltar ao topo'
          color={useColorModeValue('white', 'gray.500')}
          bg={useColorModeValue('blue', 'fenzodark.600')}
          padding='0'
          w='2.5rem'
          h='2.5rem'
          right="1.5rem"
          bottom="1.5rem"
          borderRadius="100px"
          onClick={scrollToTop}
          className='scroll-top-icon fade fadeUp'
        >
          <Icon as={() => <ArrowUp size={'1.6rem'} color="currentColor" weight='duotone' />} />
        </Box>
      </Box>
      <style jsx global>
        {`
          .fade {
            opacity: 0;
            transition-property: opacity, transform;
            transition-duration: .4s;
            transition-timing-function: ease;
          }
          .fadeUp {
            transform: translate3d(0,100px,0);
          }
          .fadeUp.animate {
            opacity: 1;
            transform: translateZ(0);
          }
        `}
      </style>
    </>
  )
};

export default TopScrollButton;
