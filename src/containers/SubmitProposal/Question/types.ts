import { ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';

export type Props = {
  title: string;
  name: string;
  control: Control<any>;
  placeholder: string;
  centered?: boolean;
  biggerInput?: boolean;
  style?: ViewStyle;
};

export type TitleProps = {
  centered: boolean;
};

export type InputProps = {
  biggerInput: boolean;
};
