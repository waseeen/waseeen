import { PageElementType } from './element';

export interface LinkListProps {
  type: PageElementType.LINKLIST;
  links: LinkProps[];
}

export interface LinkProps {
  title: string;
  href: string;
  note?: string;
}
