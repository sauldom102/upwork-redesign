import React, { FC, memo, useMemo } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, device } from 'theme';
import type { Props } from './types';

export const useThemeInternal = () => {
  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

  const theme = useMemo(
    () => ({
      colors,
      device: {
        ...device,
        safeTop,
        safeBottom,
      },
    }),
    [safeBottom, safeTop],
  );

  return theme;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = useThemeInternal();

  return <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>;
};

export default memo(ThemeProvider);
