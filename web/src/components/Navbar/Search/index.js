import React, { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
//import { useServices } from '../../../hooks/useServices'
//import { projects } from '../../../data/mockData'
import {
  Flex,
  Box,
  Button,
  IconButton,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  List,
  ListItem,
  Skeleton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
//import useOnClickOutside from '../../../hooks/useOnClickOutside'
import Icon from '../../Icon'
import { MagnifyingGlass as SearchIcon, XCircle } from 'phosphor-react'

// https://www.youtube.com/watch?v=vXO5JMiKtM8

// http://localhost:3000/api/services/


const NavbarSearch = () => {

  //const { services, isLoading, isError } = useServices();

  //const services = projects;

  //console.log(services)

  const wrapperRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [display, setDisplay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const { colorMode } = useColorMode()
  const inputBorderColor = useColorModeValue("gray.200", "fenzodark.600")
  const inputBorderColorHover = useColorModeValue("gray.300", "fenzodark.700")
  const resultItemColor = useColorModeValue("gray.800", "gray.200")

  // useEffect(() => {
  //   const results = services && services.filter(service =>
  //     service.title.toLowerCase().includes(searchTerm.toLowerCase()) || service.search_keys.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  // useOnClickOutside(wrapperRef, () => {
  //   setDisplay(false)
  // });

  // Update Text Input onChange
  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setSearchTerm(query.toLowerCase())
    if (query && query.length >= 3) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setSearchResults(res.results)
        })
    } else {
      setSearchResults([])
    }
  }, [setSearchResults])

  // const onOpen = useCallback(() => {
  //   setDisplay(true)
  // }, [setDisplay])

  const onFocus = useCallback(() => {
    setDisplay(true)
    window.addEventListener('click', onClick)
  }, [setDisplay])

  const onClick = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setDisplay(false)
      window.removeEventListener('click', onClick)
    }
  }, [wrapperRef, setDisplay])

  // const onClose = useCallback(() => {
  //   setDisplay(false)
  // }, [setDisplay])

  // const onTextInputChange = useCallback(
  //   (event) => {
  //     setSearchTerm(event.target.value)
  //   },
  //   [setSearchTerm],
  // )

  // Update search field when clicking a search result
  // const updateSearchInput = servico => {
  //   setSearchTerm(servico.toLowerCase());
  //   setDisplay(false);
  // };

  const updateSearchInput = useCallback((value) => {
    setSearchTerm(value.toLowerCase())
    setDisplay(false)
  }, [setSearchTerm, setDisplay])

  const clearSearchInput = useCallback(() => {
    setSearchTerm('')
    setDisplay(false)
  }, [setSearchTerm, setDisplay])

  if (!searchResults) {
    return (
      <>
        <Flex
          position="relative"
          w="100%"
          minW="370px"
          maxW="450px"
          p="0 20px 0 20px"
          justifyContent="center"
          alignItems="center"
          className="search_input__loading"
          ref={wrapperRef}
        >
          <Skeleton
            w="100%"
            h="50px"
            maxW="450px"
            minW="370px"
            borderRadius="4px"
            borderColor={colorMode === "light" ? "gray.200" : "brand.bluedark"}
            startColor={colorMode === "light" ? "#f8f8fb" : "#262642"}
            endColor={colorMode === "light" ? "#f1f1f9" : "brand.bluedark"}
            className="search_input"
          />
        </Flex>
      </>
    )
  }

  return (
    <Flex
      position="relative"
      w="100%"
      minW="370px"
      maxW="450px"
      p="0 20px 0 20px"
      justifyContent="center"
      alignItems="center"
      className="search_input__wrapper"
      ref={wrapperRef}
    >
      <Box as="form" w="100%" h="100%" className="search_input__form">
        <Box display="flex" flexDirection="row">
          <InputGroup w="100%">
            <InputLeftElement
              pointerEvents="none"
              color="brand.graysilver"
              w="50px"
              h="50px"
              children={<SearchIcon size={28} />}
            />
            <Input
              id="search-all"
              display="flex"
              h="50px"
              pl="53px"
              pr="0"
              fontWeight="400"
              color="brand.graysilver"
              lineHeight="1.2rem"
              bg={colorMode === "light" ? "gray.100" : "fenzodark.500"}
              borderWidth="1px"
              borderColor={inputBorderColor}
              borderRadius="4px"
              aria-label="buscar"
              autoComplete="off"
              role="search"
              placeholder="Buscar produto ou serviço"
              //onClick={()=>setDisplay(!display)}
              onFocus={onFocus}
              value={searchTerm}
              onChange={onChange}
              //onChange={onTextInputChange}
              className="search_input__field"
              _hover={{ borderColor: inputBorderColorHover }}
            />
            {searchTerm && searchTerm.length >= 1 && (
              <InputRightElement
                w="50px"
                h="50px"
                color="gray.200"
                children={
                  <IconButton
                    w="50px"
                    h="50px"
                    color={colorMode === "brand.graysilver" ? "gray.800" : "gray.600"}
                    bg="transparent"
                    _hover={{ bg: "none " }}
                    _active={{ bg: "none " }}
                    _focus={{ bg: "none " }}
                    border="none"
                    onClick={clearSearchInput}
                  >
                    <XCircle size={20} weight="fill" />
                  </IconButton>}
              />
            )}
          </InputGroup>
        </Box>

        {display && searchResults && searchResults.length > 0 && (
          <Box
            position="absolute"
            w="100%"
            maxW="410px"
            bg={colorMode === "light" ? "white" : "gray.900"}
            borderWidth="1px"
            borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
            boxSizing="border-box"
            borderRadius="4px"
            boxShadow={colorMode === "light" ? "0px 4px 8px rgb(126 130 153 / 8%)" : "0px 4px 8px rgb(0 0 0 / 10%)"}
            p="20px 30px"
            className="search_results_wrapper"
          >
            <Text color={colorMode === "light" ? "gray.800" : "gray.200"} mb="1rem" className="search_results__title">Buscas recentes</Text>
            <Flex
              w="100%"
              alignItems="flex-start"
              direction="column"
            >
              <List spacing={4}>
                {searchResults.map((item, i) => (
                  <ListItem key={i}>
                    <Link href="/servico/[slug]" as={`/servico/${item.slug}`}>
                      <Button
                        d="flex"
                        variant="link"
                        fontSize=".88rem"
                        fontWeight="400"
                        color={colorMode === "light" ? "gray.800" : "gray.200"}
                        leftIcon={<Icon size={22} icon={item.icon_name} style={{ marginRight: "1rem" }} />}
                        onClick={() => updateSearchInput(item.title)}
                        key={item.title.toLowerCase()}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default NavbarSearch;
