import { Control } from 'react-hook-form';
import { ViewStyle } from 'react-native';

export type Props = {
  name: string;
  control: Control<any>;
  label: string;
  style?: ViewStyle;
};
