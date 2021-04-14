import { useState, useEffect } from 'react'
import {
  Box,
  IconButton,
  Icon
} from '@chakra-ui/react'

import { ArrowRight } from 'phosphor-react'
import { IconClose } from '../../components/Icon/IconsMixed'

const FenzoAnnouncer = ({ message, url }) => {

  const [visible, setVisible] = useState({
    show: true,
    scrollPos: 0
  })

  const [show, setShow] = useState(true)

  useEffect(() => {

    const now = new Date().getTime()
    const hasExpired = getLocalStorage('hideAlert')
    console.log('time now: ' + now)
    if(hasExpired) {
      console.log('expiration now: ' + hasExpired.expires)
    }

    if(hasExpired && now < hasExpired.expires) {
      setShow(false)
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

    /**
     * Função para adicionar itens no localStorage
     * @param {string} chave Chave que será usada para obter o valor posteriormente
     * @param {*} valor Quase qualquer tipo de valor pode ser adicionado, desde que não falhe no JSON.stringify
     * @param {number} minutos Tempo de vida do item
     */
    function setLocalStorage(chave: string, valor: any, minutos: number)
    {
        var expirarem = new Date().getTime() + (60000 * minutos);

        localStorage.setItem(chave, JSON.stringify({
            "value": valor,
            "expires": expirarem
        }));
    }

    /**
      * Função para obter itens do localStorage que ainda não expiraram
      * @param {string} chave Chave para obter o valor associado
      * @return {*} Retorna qualquer valor, se o item tiver expirado irá retorna undefined
      */
    function getLocalStorage(chave: string)
    {

        var itemValue = localStorage.getItem(chave);

        if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {

            //Decodifica de volta para JSON
            var current = JSON.parse(itemValue);

            return current;
        }
    }

  const handleScroll = () => {
    //console.log(document.body.getBoundingClientRect());
    setVisible({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top + 125 > visible.scrollPos
    });
    //console.log('is visible: ' + visible.show);
  };

  const hideAnnoucement = () => {
    setShow(false)
    setLocalStorage('hideAlert', true, 1)
  }

  if(!show) {
    return (<div></div>)
  }

  return (
    <Box
      w="100%"
      maxW={{ base: "1366px", sm: "100%" }}
      m="0 auto"
      //px={{ base: "1.2rem", sm: "0", md: "0", lg: "1.2rem" }}
      className={visible.show ? "announcement active" : "announcement active scrolled"}
    >
      <Box
        position="sticky"
        top="0"
        left="0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        p="12px 32px"
        color="white"
        fontSize="sm"
        backgroundImage="url('/images/bg-top-announcement.jpg')"
        backgroundSize="cover"
        backgroundPosition="50% 0"
        backgroundRepeat="no-repeat"
        overflow="hidden"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="inherit"
          fontFamily="inherit"
          width="100%"
          maxW="1366px"
          height="100%"
          px="1.25rem"
        >
          <Box
            as="a"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="inherit"
            width="100%"
            maxW="1366px"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100%"
              className="announcementMessage"
            >
              <Box as="span">{message} <Icon as={() => <ArrowRight size={16} weight="duotone" color="currentColor" style={{ display: "inline-flex", marginLeft: "1rem" }} />} color="blue.500" /></Box>
            </Box>
          </Box>
          <IconButton
            aria-label="close announcement"
            icon={<IconClose width={20} height={20} />}
            color="white"
            w="20px"
            h="20px"
            padding="0"
            bg="transparent"
            _focus={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            onClick={hideAnnoucement}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default FenzoAnnouncer;
