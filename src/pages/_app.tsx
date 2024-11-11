import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { themeState } from '../jotai';
import { useAtomValue } from 'jotai';

export default function Layout() {
  const theme = useAtomValue(themeState);
  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}
