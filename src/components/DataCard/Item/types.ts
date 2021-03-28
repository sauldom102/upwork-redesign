import { ViewStyle } from 'react-native';

export type Props = {
  title: string;
  subtitle?: string;
  verified?: boolean;
  withVerifiedText?: boolean;
  style?: ViewStyle;
};
