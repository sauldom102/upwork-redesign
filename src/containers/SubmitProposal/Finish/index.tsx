import React, { FC, memo, useRef, useEffect } from 'react';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSpring, useTiming } from 'react-native-redash';
import LottieView from 'lottie-react-native';
import { device } from 'theme';
import { Props } from './types';
import { Container, Title, Image, Subtitle, Sparkles } from './styles';

const IMAGE = require('assets/images/celebrating.png');
const SPARKLES = require('assets/lottie/sparkle.json');

const Finish: FC<Props> = ({ show = false }) => {
  const sparkles = useRef<LottieView>(null);

  useEffect(() => {
    if (show) {
      sparkles.current?.play();
    } else {
      sparkles.current?.reset();
    }
  }, [show]);

  const transition = useTiming(show);
  const springTransition = useSpring(show, {
    mass: 0.75,
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: transition.value * device.height,
      },
    ],
  }));

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${springTransition.value * 360 * 3}deg`,
      },
      {
        scale: interpolate(springTransition.value, [0, 1], [0.8, 1]),
      },
    ],
  }));

  if (!show) {
    return null;
  }

  return (
    <Container style={animatedStyle}>
      <Title>Yeah! You Did It!</Title>
      <Image source={IMAGE} resizeMode="contain" style={imageAnimatedStyle} />
      <Subtitle>Your proposal was successfully sent</Subtitle>
      <Sparkles ref={sparkles} source={SPARKLES} />
    </Container>
  );
};

export default memo(Finish);
