import { atom } from 'jotai';
import theme from '../theme';

export const hoveredBox = atom<string | null>(null);

export const themeState = atom<Record<string, string>>(theme);
