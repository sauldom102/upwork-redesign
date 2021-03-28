import { ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';

type Size = 'm' | 's';

export type Props = {
  name: string;
  control: Control<any>;
  size?: Size;
  style?: ViewStyle;
};

export type SideTextProps = {
  active?: boolean;
};

export type SizeProps = {
  size: Size;
};
