import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/roboto-mono';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto Mono', monospace`,
    body: `'Roboto Mono', monospace`,
  },
  semanticTokens: {
    colors: {
      'chakra-body-bg': {
        _light: '#2e3d45',
      },
      'chakra-body-text': {
        _light: 'white',
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        background: 'brand.primary',
      },
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
