import React, { useState, useEffect, useCallback } from 'react'
import { Box, IconButton, Icon, useColorMode, useColorModeValue, ScaleFade, Tooltip } from '@chakra-ui/react'
import { Sun, SunDim, Moon } from 'phosphor-react'
import useSound from 'use-sound'

//import MobileMenuButton from '../../components/MobileMenuButton'

// useColorModeValue("white", "gray.900")

const ThemeToggle = (props) => {

  const { mobile } = props

  const { colorMode, toggleColorMode } = useColorMode()
  // const [play] = useSound("/themeswitch.mp3", {
  //   volume: 0.05,
  //   sprite: {
  //     on: [0, 300],
  //     off: [500, 300],
  //   },
  // });

  const handleClick = () => {
    toggleColorMode();
    //colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };

  return (
    <Box>
      <Tooltip
        label={colorMode === "dark" ? "Fenzo Light" : "Fenzo Dark"}
        aria-label="A tooltip"
      >
        <IconButton
          display="flex"
          justifyContent="center"
          alignItems="center"
          isRound
          color={useColorModeValue("fenzodark.700", "white")}
          aria-label="Switch theme"
          variant="solid"
          icon={colorMode === "dark" ? (<Icon as={Sun} width={22} height={22} />) : (<Icon as={Moon} width={22} height={22} />)}
          onClick={handleClick}
        />
      </Tooltip>
    </Box>
  );
};
export default ThemeToggle;
