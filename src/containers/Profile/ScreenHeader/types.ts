import Animated from 'react-native-reanimated';

export type Props = {
  earnings: number;
  scroll: Animated.SharedValue<number>;
  onHeight?: (height: number) => void;
};
