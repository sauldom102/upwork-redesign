import styled from 'styled-components/native';
import BaseText from 'components/Text';
import { RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { ContainerProps, TextProps } from './types';

export const Container = styled.View``;

export const Body = styled(RectButton)<ContainerProps>`
  width: ${({ hasPhoto }) => (hasPhoto ? '80%' : 'auto')};
  max-width: 85%;
  align-self: ${({ fromMe }) => (fromMe ? 'flex-end' : 'flex-start')};
  padding: ${({ hasPhoto }) => (hasPhoto ? 6 : 10)}px;
  border-radius: 12px;
  background-color: ${({ theme, fromMe }) =>
    fromMe ? theme.colors.primary : '#eee'};
`;

export const Text = styled(BaseText)<TextProps>`
  color: ${({ theme, fromMe }) =>
    fromMe ? theme.colors.white : theme.colors.gray0};
`;

export const Photo = styled(FastImage)`
  width: 100%;
  height: 200px;
  border-radius: 9px;
  z-index: -1;
`;

export const TextTime = Animated.createAnimatedComponent(styled(BaseText)`
  align-self: center;
  font-size: 12px;
`);

export const PhotoTime = styled(BaseText)`
  font-size: 10px;
  position: absolute;
  bottom: 14px;
  right: 14px;
  color: #fff;
`;
