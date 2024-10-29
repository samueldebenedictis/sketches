import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        background: mode('gray.200', 'gray.800')(props), //mode(light mode color, dark mode color)
        color: mode('gray.800', 'gray.200')(props),
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
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#111111',
    },
  },
});

export default theme;
