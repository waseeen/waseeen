import { Heading } from '@chakra-ui/react';
import { PageElement, PageElementType } from '../../types/element';
import CardGroup from '../CardGroup/CardGroup';
import Wishlist from '../Wishlist/Wishlist';

const PageWrap = ({ elements }: { elements: PageElement[] }) => {
  return (
    <>
      {elements.map((element, i) => (
        <div key={i}>
          {element.type === PageElementType.TITLE && <Heading size={'lg'}>{element.title}</Heading>}
          {element.type === PageElementType.GROUP && <CardGroup key={i} cards={element.cards} />}
          {element.type === PageElementType.LINKLIST && <Wishlist links={element.links} />}
        </div>
      ))}
    </>
  );
};

export default PageWrap;
