import { ViewStyle } from 'react-native';

export type Size = 'xs' | 's' | 'm' | 'xl';

export type IconType = 'fave' | 'remove' | 'add' | 'back';

export type Props = {
  type: IconType;
  active?: boolean;
  size?: Size;
  onPress?: () => void;
  bgColor?: string;
  iconColor?: string;
  style?: ViewStyle;
};

export type MainProps = {
  size: Size;
  color: string;
};
