import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  colors: {
    gray: {
      '50': '#F5F8FA',
    },
  },
} as Theme | {});
