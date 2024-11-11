import { PageElement } from './element';

export type PageConfig = {
  title?: string;
  elements: PageElement[];
  bgColor?: string;
  fgColor?: string;
};
