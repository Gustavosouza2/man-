'use client'

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    main: {
      green: {
        100: '#00754A',
      },
      beige: {
        100: '#DFD5B2',
      },
      dark: {
        100: '#282828',
        200: '#191815',
      },
      cyan: {
        100: '#00FFA3',
      },
    },
  },

  components: {
    Button: {
      sizes: {
        sm: {
          height: '2.625rem',
          width: '7.5rem',
        },
      },

      variants: {
        primary: {
          borderRadius: '1.188rem',
          _hover: { bg: '#186642' },
          bg: 'main.green.100',
          height: '3.125rem',
          width: '9.688rem',
        },

        outline: {
          _hover: { bg: '#00754A', color: '#fff' },
          borderRadius: '1.188rem',
          borderWidth: '0.063rem',
          borderColor: '#00754A',
          borderStyle: 'solid',
          height: '3.125rem',
          bg: 'transparent',
          width: '9.688rem',
        },
      },
    },
  },
})
