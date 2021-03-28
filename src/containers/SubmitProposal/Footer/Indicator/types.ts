import { ViewStyle } from 'react-native';

export type Props = {
  count: number;
  current: number;
  style?: ViewStyle;
};

export type DotProps = {
  isCentral?: boolean;
};
