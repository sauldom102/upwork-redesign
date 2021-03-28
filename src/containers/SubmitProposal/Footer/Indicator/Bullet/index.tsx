import React, { FC, memo } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import { colors } from 'theme';
import { Container, Circle } from './styles';
import { Props } from './types';

const Bullet: FC<Props> = ({ active, last = false }) => {
  const transition = useTiming(active);

  const size = useDerivedValue(
    () =>
      withTiming(active ? 7 : 5, {
        duration: 200,
        easing: Easing.linear,
      }),
    [active],
  );

  const backgroundColor = useDerivedValue(
    () =>
      interpolateColor(transition.value, [0, 1], ['#d1d1d1', colors.primary]),
    [active],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
    backgroundColor: backgroundColor.value,
  }));

  return (
    <Container
      style={{
        marginRight: last ? 0 : 12,
      }}
    >
      <Circle style={animatedStyle} />
    </Container>
  );
};

export default memo(Bullet);
