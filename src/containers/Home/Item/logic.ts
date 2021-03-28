import { useCallback } from 'react';
import { useCloseItemGesture } from 'utils';
import { LogicParams } from './types';

const useLogic = ({ id, onPress, onPressFave, onPressClose }: LogicParams) => {
  const {
    animatedStyle,
    gestureHandler,
    handlePressClose,
    onLayout,
  } = useCloseItemGesture({
    itemId: id,
    onClose: onPressClose,
    separator: 30,
  });

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  const handlePressFave = useCallback(() => {
    if (onPressFave) {
      onPressFave(id);
    }
  }, [onPressFave, id]);

  return {
    animatedStyle,
    handlePress,
    handlePressClose,
    handlePressFave,
    gestureHandler,
    onLayout,
  };
};

export default useLogic;
