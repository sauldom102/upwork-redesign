import React, { FC, memo } from 'react';
import { Props } from './types';
import {
  Pan,
  Container,
  Main,
  Body,
  Title,
  Time,
  Close,
  CloseButton,
} from './styles';
import useLogic from './logic';

const Item: FC<Props> = ({ id, text, time, onPressClose }) => {
  const {
    gestureHandler,
    animatedStyle,
    handlePressClose,
    closeButtonAnimatedStyle,
    onLayout,
  } = useLogic({
    id,
    onPressClose,
  });

  return (
    <Pan onGestureEvent={gestureHandler} minDist={10} failOffsetY={[-10, 10]}>
      <Container style={animatedStyle} onLayout={onLayout}>
        <Main>
          <Body>
            <Title source={{ html: text }} />
          </Body>
          <Time>{time}</Time>
          <Close style={closeButtonAnimatedStyle}>
            <CloseButton onPress={handlePressClose} />
          </Close>
        </Main>
      </Container>
    </Pan>
  );
};

export default memo(Item);
