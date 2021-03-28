import { TextProps } from 'react-native';

export type Fonts =
  | 'Rubik-Black'
  | 'Rubik-Bold'
  | 'Rubik-ExtraBold'
  | 'Rubik-Light'
  | 'Rubik-Medium'
  | 'Rubik-Regular'
  | 'Rubik-SemiBold';

export type Props = {
  family?: Fonts;
} & TextProps & {
    children: string | number;
  };
