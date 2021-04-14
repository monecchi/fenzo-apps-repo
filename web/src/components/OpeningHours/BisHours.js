import React, { useRef, useCallback, useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR from 'swr'
import { useSettings } from '../../hooks/useSettings' // hook
import hours from '../../data/openinghours.json'
import businessHours from 'business-hours.js'
import {
  Box,
  Badge,
  Button,
  Stack,
  Text,
  Skeleton,
  Collapse,
  Tooltip,
  LinkBox,
  LinkOverlay,
  Icon as ChakraIcon,
  useColorModeValue
} from '@chakra-ui/react'

import { Circle, ArrowDown, ArrowUp } from 'phosphor-react'

//
// Constructor like for function component
//
const useSingleton = (initializer) => {
  useState(initializer)
}

const useConstructor = (callBack = () => { }) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
}

//
// SWR fetcher axios
//
const fetcher = url => axios.get(url).then(res => res.data)

//
// Opening Hours List Collapsible Component
//
const OpeningHours = () => {

  //useSingleton(businessHours.init(hours));

  const { settings, isError } = useSettings()
  //const { data, error } = useSWR('/api/v1', fetcher) // using custom swr fetcher
  const [show, setShow] = useState(0)
  const [isOpened, setIsOpen] = useState(false)

  useConstructor(() => {
    businessHours.init(hours)
  }, []);

  useEffect(() => {
    setIsOpen(businessHours.isOpenNow())
  }, [setIsOpen])

  // theme colors
  const badgeColor = isOpened ? useColorModeValue("brand.success", "green.200") : useColorModeValue("brand.danger", "brand.softdanger");
  const badgeBgColor = isOpened ? useColorModeValue("brand.softsuccess", "rgb(54 179 126 / 12%)") : useColorModeValue("brand.softdanger", "rgb(239 40 64 / 12%)");
  const btnCollapseColor = useColorModeValue("blue.500", "paleblue.100");

  const handleToggle = useCallback(() => {
    setShow(!show)
  },
    [show, setShow],
  )

  if (!settings) {
    return (
      <>
        <Stack mb="1.5rem">
          <Skeleton height="20px" maxW="80%" />
          <Skeleton height="20px" maxW="80%" />
          <Skeleton height="20px" maxW="80%" />
        </Stack>
      </>
    )
  }

  //
  // Set openingHours object from next static api
  //
  const openingHours = settings[0].business_hours

  const nextOpeningDate = businessHours.nextOpeningHour().format("YYYY-MM-DD HH:mm z") // full date string
  const nextOpeningHour = businessHours.nextOpeningHour().format("HH:mm") // returns 09:00 //

  const dayTomorrow = new Date(nextOpeningDate).toLocaleDateString('pt-BR', { weekday: 'long' })

  return (
    <>
      <Box display="flex" flexDirection="column" maxW="80%" mb="1.2rem">
        <LinkBox className="hours-tooltip">
          <Tooltip
            label={`${"Abriremos às " + nextOpeningHour + "h" + " • " + dayTomorrow}`}
            placement="top"
            {...{ isDisabled: isOpened === true }}
            {...{ isOpen: isOpened === false && show }}
            //isOpen={show}
            hasArrow
            //arrowPadding={20}
            p="1rem"
            color="blue.800"
            bg="white"
            borderRadius="4px"
            boxShadow="0 0.125rem 0.625rem rgb(0 14 81 / 5%)"
            sx={{
              ".chakra-tooltip__arrow-wrapper": {
                zIndex: "1 !important;",
              },
            }}
          >
            <LinkOverlay onClick={handleToggle}>
              <Badge
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={badgeColor}
                bg={badgeBgColor}
                fontSize="1rem"
                fontWeight="600"
                textTransform="none"
                rounded="4px"
                py="0.35rem"
                px="0.75rem"
              >
                <Circle weight="fill" style={{ marginRight: ".45rem" }}>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="1.2s"
                    repeatCount="indefinite"
                  >
                  </animate>
                </Circle>
                {isOpened ? (
                  <span className="open">Aberto agora</span>
                ) : (
                  <span className="closed">Fechado agora</span>
                )}
              </Badge>
            </LinkOverlay>
          </Tooltip>
        </LinkBox>
      </Box>
      <Collapse startingHeight={0} in={show}>
        <Stack>
          {
            openingHours && openingHours.map((hour, index) => {
              //const week_day = hour.day.name
              return (
                <Box display="flex" direction="column" maxW="80%" key={index}>
                  <Badge color="#1652f0" bg="#dfe6ff" fontSize="sm" fontWeight="600" mr="0.75rem" minW="50px" key={hour.day.label}>
                    {hour.day.name_abrev}
                  </Badge>
                  <Text align="right" key={hour.id}>{hour.day.open ? hour.day.opens + 'h ' + ' — ' + hour.day.closes + 'h' : "Fechado"}</Text>
                </Box>
              )
            })
          }
        </Stack>
      </Collapse>
      <Button
        size="sm"
        variant="link"
        leftIcon={show ? <ArrowUp size={22} /> : <ArrowDown size={22} />}
        color={btnCollapseColor}
        onClick={handleToggle}
        mt="1rem"
        mb="2rem"
        _focus={{ boxShadow: "none " }}
      >
        Mostrar {show && show ? "Menos" : "horários"}
      </Button>
    </>
  )
};

export default OpeningHours;
