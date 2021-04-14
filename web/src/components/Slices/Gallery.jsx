import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue } from '@chakra-ui/react'
import { nextPrismicLoader } from '../../constants'
import Image from 'next/image'

const Gallery = ({ data: { items } }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const images = items.map(({ image }) => {
    return {
      caption: image.alt,
      alt: image.alt,
      source: image.url,
    }
  })

  return (
    <>
      <Box
        padding={4}
        w="100%"
        maxW="1366px"
        mx="auto"
        bg={useColorModeValue("white", "fenzodark.900")}
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {items && (
          <Image
            loader={nextPrismicLoader}
            src={items[0].image.url}
            alt={items[0].image.alt}
            title={items[0].image.alt}
            layout='responsive'
            width={items[0].image.dimensions.width}
            height={items[0].image.dimensions.height}
            onClick={onOpen}
          />
        )}
      </Box>


      <Button onClick={onOpen}>Open Photo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{items[0].image.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {items && (
              <Image
                loader={nextPrismicLoader}
                src={items[0].image.url}
                alt={items[0].image.alt}
                title={items[0].image.alt}
                layout='responsive'
                width={items[0].image.dimensions.width}
                height={items[0].image.dimensions.height}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}

Gallery.propTypes = {
  data: PropTypes.object,
}

export default Gallery
