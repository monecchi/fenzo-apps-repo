import { Fragment, useRef, createRef } from 'react'
import { forwardRef, Box, Link, IconButton } from '@chakra-ui/react';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
  WhatsappLogo,
  GithubLogo,
  Info
} from 'phosphor-react';


const SocialIcon = forwardRef((props, ref) => {
  const { name, url, style } = props
  const icoRef = createRef()
  const renderIcon = () => {
    switch (name) {
      case 'Facebook':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <FacebookLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'Twitter':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <TwitterLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'LinkedIn':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <LinkedinLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'Instagram':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <InstagramLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'Youtube':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <YoutubeLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'Github':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <GithubLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'Portfolio':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <Info
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      case 'WhatsApp':
        return (
          <Box
            color="fensodark.400"
            _hover={{ color: "blue.500" }}
            ref={icoRef}
          >
            <WhatsappLogo
              color='currentColor'
              size={'1.6rem'}
              weight='fill'
            />
          </Box>
        )
      default:
        return null
    }
  };

  if(name === '' || name === null) {
    return(<Fragment></Fragment>)
  }

  return (
    <Link href={url} isExternal>
      <IconButton
        variant='ghost'
        target='_blank'
        rel='noreferrer noopener'
        aria-label={name}
        alt={name}
      // onClick={() =>
      //   trackGAEvent('social icons', `clicked on ${name} link`, 'icon click')
      // }
      >
        {renderIcon()}
      </IconButton>
    </Link>
  )
})

export default SocialIcon;
