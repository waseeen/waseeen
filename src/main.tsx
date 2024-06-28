import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from '@generouted/react-router';
import { createRoot } from 'react-dom/client';
import theme from './theme';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>,
);
