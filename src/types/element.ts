import { CardGroup } from "./card";
import { TitleProps } from "./title";

export enum PageElementType {
    CARD = 'CARD',
    TITLE = 'TITLE',
    GROUP = 'GROUP'
}

export type PageElement = TitleProps | CardGroup;
