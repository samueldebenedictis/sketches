import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "'Roboto', 'monospace'",
    body: "'Roboto', 'monospace'",
  },
  shadows: {
    outline: '0 0 0 3px gray.100',
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'gray.100',
      },
    },
  },
})

export default theme
