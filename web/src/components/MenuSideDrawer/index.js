import React from 'react'
import { useDisclosure } from "@chakra-ui/react"
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

const MenuSideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Abrir
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Enviar Mensagem</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Digite..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button color="blue">Enviar</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MenuSideDrawer;
