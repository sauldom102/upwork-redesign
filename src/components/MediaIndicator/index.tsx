import React, { FC, memo, useEffect } from 'react';
import { useLayout } from '@react-native-community/hooks';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { withPause } from 'react-native-redash';
import { Container, Progress } from './styles';
import { Props } from './types';

const MediaIndicator: FC<Props> = ({
  duration,
  index,
  current,
  enabled = true,
  paused,
}) => {
  const { onLayout, width } = useLayout();

  const w = useSharedValue(0);

  const initialPaused = useSharedValue(false);
  const p = paused ?? initialPaused;

  useEffect(() => {
    if (enabled) {
      if (index === current) {
        w.value = 0;
        w.value = withPause(
          withTiming(width, {
            duration,
            easing: Easing.linear,
          }),
          p,
        );
      } else if (index > current) {
        w.value = 0;
      } else if (index < current) {
        w.value = width;
      }
    }
  }, [enabled, index, current, w, width, duration, p]);

  const animatedStyles = useAnimatedStyle(
    () => ({
      width: enabled ? w.value : 0,
    }),
    [enabled],
  );

  return (
    <Container onLayout={onLayout}>
      <Progress style={animatedStyles} />
    </Container>
  );
};

export default memo(MediaIndicator);
