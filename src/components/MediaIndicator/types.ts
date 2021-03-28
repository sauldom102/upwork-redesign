import Animated from 'react-native-reanimated';

export type Props = {
  duration: number;
  index: number;
  current: number;
  enabled?: boolean;
  paused?: Animated.SharedValue<boolean>;
};
