import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Dimensions, Platform } from 'react-native';

export const colors = {
  primary: '#6EB943',
  alphaPrimary: (alpha = 0.5) => `rgba(110, 185, 67, ${alpha})`,
  gray0: '#4A4A4A',
  gray1: '#D1D1D1',
  red: '#E15554',
  white: '#fff',
  pictonBlue: '#5BC0EB',
  transparent: 'rgba(0,0,0,0)',
  alphaBlack: (alpha = 0.5) => `rgba(0,0,0,${alpha})`,
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export const useTheme = () => useContext(ThemeContext);
