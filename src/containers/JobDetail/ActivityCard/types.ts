import { ViewStyle } from 'react-native';

type Feat = {
  title: string;
  subtitle: string;
};

export type Props = {
  feats: Feat[];
  style?: ViewStyle;
};
