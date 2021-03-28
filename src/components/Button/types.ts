import { ViewStyle } from 'react-native';
import { Variant as IconVariant } from './Icon/types';

export type Variant = IconVariant;

export type Props = {
  title: string;
  onPress?: () => void;
  leftIcon?: 'play' | 'flag';
  enabled?: boolean;
  variant?: Variant;
  style?: ViewStyle;
  mainStyle?: ViewStyle;
};

export type VariantProps = {
  variant: Variant;
};
