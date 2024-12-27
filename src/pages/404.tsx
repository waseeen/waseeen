import Card from '../components/Card/Card';
import { PageElementType } from '../types/element';
import { Flex, Heading } from '@chakra-ui/react';
import useTitle from '../hooks/useTitle';

const Page404 = () => {
  useTitle('404 | waseeen');
  return (
    <>
      <div>
        <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
          <Heading>404. Ты здесь не должен был появиться</Heading>
        </Flex>
        <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
          <Card type={PageElementType.CARD} title="тык" href="https://waseeen.ru" target="_self" />
        </Flex>
      </div>
    </>
  );
};

export default Page404;
