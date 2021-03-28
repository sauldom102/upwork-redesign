import { colors } from 'theme';
import { Variant } from './types';

export const BACKGROUND_COLORS: Record<Variant, string> = {
  primary: colors.primary,
  secondary: colors.white,
  facebook: '#1877F2',
  google: colors.white,
  apple: '#000',
};

export const TITLE_COLORS: Record<string, string> = {
  google: colors.alphaBlack(0.54),
  secondary: colors.gray0,
};
