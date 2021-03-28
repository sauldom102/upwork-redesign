import React, { FC, useCallback, memo } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Container, Text, Photo, PhotoTime, TextTime, Body } from './styles';
import { Props } from './types';

const Message: FC<Props> = ({ msg, onPress }) => {
  const { text, fromMe, photo, previewAt } = msg;

  const showTime = useSharedValue(0);

  const handlePress = useCallback(() => {
    if (text && !photo) {
      showTime.value = withTiming(showTime.value ? 0 : 1, {
        duration: 250,
        easing: Easing.ease,
      });
    }
    if (onPress) {
      onPress(msg);
    }
  }, [msg, onPress, showTime, text, photo]);

  const animatedTextStyle = useAnimatedStyle(() => ({
    height: showTime.value * 14,
    marginTop: showTime.value * 6,
    marginBottom: showTime.value * 12,
    opacity: showTime.value,
  }));

  return (
    <Container>
      {text && <TextTime style={animatedTextStyle}>{previewAt}</TextTime>}
      <Body fromMe={fromMe} hasPhoto={!!photo} onPress={handlePress}>
        {photo && <Photo source={{ uri: photo }} resizeMode="cover" />}
        {text && <Text fromMe={fromMe}>{text}</Text>}
        {photo && <PhotoTime>{previewAt}</PhotoTime>}
      </Body>
    </Container>
  );
};

export default memo(Message);
