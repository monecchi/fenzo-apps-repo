import React from 'react'
import { Sun, SunDim, Moon } from 'phosphor-react'
import { IconButton, Icon, useColorMode, useColorModeValue, ScaleFade, Tooltip } from '@chakra-ui/react'
import useSound from 'use-sound'
import MobileMenuButton from '../../components/MobileMenuButton'

// useColorModeValue("white", "gray.900")

const ThemeToggle = ({ mobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("/themeswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };

  return (
    <Tooltip
      label={colorMode === "dark" ? "Light mode" : "Dark mode"}
      aria-label="A tooltip"
    >
      {mobile ? (
        <MobileMenuButton
          label={colorMode === "dark" ? "Light Mode" : "Dark Mode"}
          icon={
            colorMode === "dark" ? (
              <ScaleFade in>
                <Icon as={Sun} width={22} height={22} mr="1rem" />
              </ScaleFade>
            ) : (
              <ScaleFade in>
                <Icon as={Moon} width={22} height={22} mr="1rem" />
              </ScaleFade>
            )
          }
          onClick={handleClick}
        />
      ) : (
        <IconButton
          isRound
          aria-label="Switch theme"
          variant="solid"
          icon={
            colorMode === "dark" ? (
              <ScaleFade in>
                <Icon as={Sun} width={22} height={22} />
              </ScaleFade>
            ) : (
              <ScaleFade in>
                <Icon as={Moon} width={22} height={22} />
              </ScaleFade>
            )
          }
          onClick={handleClick}
        />
      )}
    </Tooltip>
  );
};
export default ThemeToggle;
