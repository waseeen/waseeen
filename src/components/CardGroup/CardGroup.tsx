import { Flex } from '@chakra-ui/react';
import Card from '../Card/Card';
import { CardProps } from '../../types/card';

const CardGroup = ({ cards }: { cards: CardProps[] }) => {
  return (
    <Flex flexWrap={'wrap'} justify={'center'} columnGap={40} rowGap={4} mb={4}>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </Flex>
  );
};

export default CardGroup;
