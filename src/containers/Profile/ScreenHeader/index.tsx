import React, { FC, memo, useRef, useEffect } from 'react';
import { withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { useLayout } from '@react-native-community/hooks';
import { useCenterTitle } from 'utils';
import { Props } from './types';
import { Container, Title, Right, Currency, Amount } from './styles';

const SCROLL_OFFSET = 50;

const ScreenHeader: FC<Props> = ({ earnings, scroll, onHeight }) => {
  const { device } = useTheme();
  const { onLayout, height } = useLayout();

  const heightSent = useRef(false);

  const { style: leftStyle, onLayout: leftOnLayout } = useCenterTitle({
    scroll,
    to: 'left',
    maxScroll: SCROLL_OFFSET,
  });
  const { style: rightStyle, onLayout: rightOnLayout } = useCenterTitle({
    scroll,
    to: 'right',
    maxScroll: SCROLL_OFFSET,
  });

  const containerStyle = useAnimatedStyle(() => ({
    height: withTiming(
      device.safeTop + (scroll.value > SCROLL_OFFSET ? 45 : 65),
    ),
  }));

  useEffect(() => {
    if (!heightSent.current && height && onHeight) {
      heightSent.current = true;
      onHeight(height);
    }
  }, [onHeight, height]);

  return (
    <Container style={containerStyle} onLayout={onLayout}>
      <Title style={leftStyle} onLayout={leftOnLayout}>
        Earnings Available:
      </Title>
      <Right style={rightStyle} onLayout={rightOnLayout}>
        <Currency>$</Currency>
        <Amount>{earnings}</Amount>
      </Right>
    </Container>
  );
};

export default memo(ScreenHeader);
