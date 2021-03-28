import { ViewStyle } from 'react-native';
import { Props as ItemProps } from './Item/types';

export type Props = {
  title: string;
  data: Omit<ItemProps, 'style'>[];
  paymentVerified?: boolean;
  rating?: number;
  ratingTotal?: number;
  style?: ViewStyle;
};
