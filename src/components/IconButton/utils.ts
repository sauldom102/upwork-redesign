import { IconType, Size } from './types';

export const getSizeValue = (size: Size) => {
  if (size === 'xl') {
    return 35;
  }

  if (size === 's') {
    return 20;
  }

  if (size === 'xs') {
    return 15;
  }

  return 30;
};

const ICON_SIZES: Record<IconType, Record<Size, number>> = {
  fave: {
    xs: 10,
    s: 10,
    m: 10,
    xl: 15,
  },
  remove: {
    xs: 12,
    s: 16,
    m: 16,
    xl: 16,
  },
  add: {
    xs: 8,
    s: 8,
    m: 8,
    xl: 8,
  },
  back: {
    xs: 15,
    s: 15,
    m: 15,
    xl: 15,
  },
};

export const getIconSizeValue = (size: Size, type: IconType) => {
  return ICON_SIZES?.[type]?.[size] ?? 0;
};
