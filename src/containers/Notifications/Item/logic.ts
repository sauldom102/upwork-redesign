import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useCloseItemGesture } from 'utils';
import { UseLogicParams } from './types';

const useLogic = ({ id, onPressClose }: UseLogicParams) => {
  const {
    gestureHandler,
    animatedStyle,
    handlePressClose,
    onLayout,
    pos,
  } = useCloseItemGesture({
    itemId: id,
    onClose: onPressClose,
    separator: 10,
  });

  const closeButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(pos.value, [-75, 0], [1.25, 1], Extrapolate.CLAMP),
      },
    ],
  }));

  return {
    gestureHandler,
    animatedStyle,
    handlePressClose,
    closeButtonAnimatedStyle,
    onLayout,
  };
};

export default useLogic;
