import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      "html, body": {
        background: mode("gray.300", "gray.800")(props),  //mode(light mode color, dark mode color)
        color: mode("gray.800", "gray.300")(props),
      },

    }),
  },
  fonts: {
    heading: "'Roboto', 'monospace'",
    body: "'Roboto', 'monospace'",
  },
  shadows: {
    outline: '0 0 0 0 gray.100',
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
