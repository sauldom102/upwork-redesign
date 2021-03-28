import { useCallback } from 'react';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useLayout } from '@react-native-community/hooks';
import { clamp, snapPoint } from 'react-native-redash';
import { device } from 'theme';

type Params = {
  itemId: string;
  onClose?: (itemId: string) => void;
  snapToIntermediate?: number;
  separator?: number;
};

const useCloseItemGesture = ({
  itemId,
  snapToIntermediate = 0,
  separator = 0,
  onClose,
}: Params) => {
  const pos = useSharedValue(0);
  const marginTop = useSharedValue(0);

  const { height, onLayout } = useLayout();

  const handleClose = useCallback(() => {
    marginTop.value = withSpring(-height - separator, undefined, (finished) => {
      if (finished && onClose) {
        runOnJS(onClose)(itemId);
      }
    });
  }, [marginTop, separator, onClose, itemId, height]);

  const handlePressClose = useCallback(() => {
    if (pos.value !== -device.width) {
      pos.value = withTiming(-device.width, undefined, (finished) => {
        if (finished) {
          runOnJS(handleClose)();
        }
      });
    } else {
      handleClose();
    }
  }, [handleClose, pos]);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number; activeX: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = pos.value;
    },
    onActive: ({ translationX }, ctx) => {
      const newPos = clamp(ctx.startX + translationX, -device.width, 0);
      ctx.activeX = newPos;
      pos.value = newPos;
    },
    onEnd: ({ velocityX }, { activeX }) => {
      const newPoint = snapPoint(activeX, velocityX, [
        0,
        snapToIntermediate,
        -device.width,
      ]);
      const newVal = withTiming(newPoint, undefined, (finished) => {
        if (finished && newPoint === -device.width) {
          runOnJS(handlePressClose)();
        }
      });

      pos.value = newVal;
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: pos.value,
      },
    ],
    marginTop: marginTop.value,
  }));

  return {
    gestureHandler,
    animatedStyle,
    handlePressClose,
    onLayout,
    pos,
  };
};

export default useCloseItemGesture;
