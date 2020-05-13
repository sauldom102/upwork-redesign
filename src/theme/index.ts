import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Dimensions, Platform } from 'react-native';

const colors = {
  transparent: 'rgba(0,0,0,0)',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
