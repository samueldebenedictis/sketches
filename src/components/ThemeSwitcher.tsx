import { Box, IconButton } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {colorMode === "dark" ?
        <IconButton
          aria-label="dark"
          bg="transparent"
          icon={<FaSun />}fontSize="20px"
          onClick={toggleColorMode}
        />
        : <IconButton
          aria-label="light"
          bg="transparent"
          onClick={toggleColorMode}
          icon={<FaMoon />}fontSize="20px"
        />
      }
    </>
  )
}

export default ThemeSwitcher