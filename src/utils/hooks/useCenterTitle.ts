import { useLayout } from '@react-native-community/hooks';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

type Params = {
  scroll: Animated.SharedValue<number>;
  to: 'left' | 'right';
  maxScroll: number;
};

const useCenterTitle = ({ scroll, to, maxScroll }: Params) => {
  const { width, onLayout } = useLayout();
  const {
    device: { width: screenWidth },
  } = useTheme();

  const center = screenWidth / 2 - width / 2;

  const translateX = useDerivedValue(() => {
    const res = center - 35;
    if (to === 'left') {
      return -res;
    }

    return res;
  }, [center, screenWidth, width, to]);

  const style = useAnimatedStyle(() => ({
    left: center,
    transform: [
      {
        translateX: withTiming(scroll.value > maxScroll ? translateX.value : 0),
      },
    ],
  }));

  return {
    style,
    onLayout,
  };
};

export default useCenterTitle;
