import { Platform } from 'react-native';
import { useAppState } from '@react-native-community/hooks';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const useLogic = () => {
  const appState = useAppState();
  const backgrounded =
    Platform.OS === 'ios' &&
    (appState === 'background' || appState === 'inactive');

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(backgrounded ? 1 : 0),
    }),
    [backgrounded],
  );

  return {
    animatedStyle,
  };
};

export default useLogic;
