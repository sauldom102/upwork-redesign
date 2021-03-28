import { ViewStyle } from 'react-native';

export type Props = {
  uri: string;
  size: number;
  imageReduction?: number;
  border?: number;
  style?: ViewStyle;
};

export type ContainerProps = {
  size: number;
};

export type ImageProps = {
  size: number;
  reduction?: number;
  border?: number;
};
