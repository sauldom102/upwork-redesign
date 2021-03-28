import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { device } from 'theme';

function interpolateWithClamp(x: number, input: number[], output: number[]) {
  'worklet';

  return interpolate(x, input, output, Extrapolate.CLAMP);
}

type Params = { goBack: () => void };

const useLogic = ({ goBack }: Params) => {
  const offset = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<any, { startY: number }>({
    onStart: (_, ctx) => {
      ctx.startY = offset.value;
    },
    onActive: ({ translationY }, ctx) => {
      offset.value = ctx.startY + translationY;
    },
    onEnd: () => {
      if (offset.value > 200) {
        offset.value = withTiming(device.height, {}, (finished) => {
          if (finished) {
            runOnJS(goBack)();
          }
        });
      } else {
        offset.value = withTiming(0, {
          duration: 250,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: interpolateWithClamp(offset.value, [0, 200], [1, 0.75]),
        },
        {
          translateY: interpolateWithClamp(
            offset.value,
            [0, 200, 1000],
            [0, 200, 300],
          ),
        },
      ],
      borderRadius: interpolateWithClamp(offset.value, [0, 20, 200], [0, 5, 8]),
    }),
    [],
  );

  const overlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolateWithClamp(
      offset.value,
      [0, 20, 200, 0.8 * device.height, device.height],
      [1, 0.9, 0.8, 0.5, 0],
    ),
  }));

  return {
    gestureHandler,
    animatedStyle,
    overlayAnimatedStyle,
  };
};

export default useLogic;
