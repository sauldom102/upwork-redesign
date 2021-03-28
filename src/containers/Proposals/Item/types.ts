import { ViewStyle } from 'react-native';

export type Props = {
  id: string;
  title: string;
  amount: number;
  onPress?: (id: string) => void;
  style?: ViewStyle;
};
