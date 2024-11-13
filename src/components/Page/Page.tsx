import { Flex, Heading, Container } from '@chakra-ui/react';
import { PageConfig } from '../../types/page';
import PageWrap from '../PageWrap/PageWrap';
import { ReactNode } from 'react';

const AppPage = ({ children, config }: { children?: ReactNode; config: PageConfig }) => {
  const { elements, title } = config;
  return (
    <>
      {title && (
        <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
          <Heading>{title}</Heading>
        </Flex>
      )}
      <Container maxW="container.xl" mt={4} p={4} bgColor={'#2a2c34'} borderRadius="10px">
        <PageWrap elements={elements} />
        {children}
      </Container>
    </>
  );
};

export default AppPage;
