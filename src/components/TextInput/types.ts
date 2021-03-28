import { RefObject } from 'react';
import { TextInputProps, ViewStyle, TextInput } from 'react-native';

export type InputType = 'email' | 'password' | 'url' | 'phone' | 'number';

type LeftIcon = 'search';
type RightIcon = 'filter';

export type Props = Omit<TextInputProps, 'ref' | 'style'> & {
  label?: string;
  leftIcon?: LeftIcon;
  rightIcon?: RightIcon;
  style?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  innerRef?: RefObject<TextInput>;
  nextFieldRef?: RefObject<TextInput>;
  type?: InputType;
  onBlur?: () => void;
  error?: string;
  inputStyle?: TextInputProps['style'];
};

export type InputContainerProps = {
  focused?: boolean;
  error?: boolean;
  type?: InputType;
};

export type InputProps = {
  withIcons?: boolean;
};
