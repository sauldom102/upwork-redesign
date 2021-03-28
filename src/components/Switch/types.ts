import { ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';

export type Props = {
  control: Control<any>;
  name: string;
  style?: ViewStyle;
};
