import { PageElementType } from "./element";

export interface CardProps {
    type: PageElementType.CARD;
    title: string;
    href: string;
    source?: string;
    icon?: React.ReactNode;
}

export interface CardGroup {
    type: PageElementType.GROUP;
    cards: CardProps[];
}

