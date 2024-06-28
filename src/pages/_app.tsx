import { Container, Flex, Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
        <Heading>Waseeen's field</Heading>
      </Flex>
      <Container maxW="container.xl" mt={4} p={4} bgColor="#2a2c34" borderRadius="10px">
        <Outlet />
      </Container>
    </>
  );
}
