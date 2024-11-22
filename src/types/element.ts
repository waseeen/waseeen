import { CardGroup } from './card';
import { LinkListProps } from './linklist';
import { TitleProps } from './title';

export enum PageElementType {
  CARD = 'CARD',
  TITLE = 'TITLE',
  GROUP = 'GROUP',
  LINKLIST = 'LINKLIST',
}

export type PageElement = TitleProps | CardGroup | LinkListProps;
