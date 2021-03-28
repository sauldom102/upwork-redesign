import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { Text } from 'components';

export const Container = Animated.createAnimatedComponent(styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => -theme.device.height}px;
  left: 0;
  right: 0;
  height: ${({ theme }) =>
    theme.device.height - 80 - theme.device.safeBottom}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`);

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Image = Animated.createAnimatedComponent(styled(FastImage)`
  width: ${({ theme }) => theme.device.width - 90}px;
  height: 307px;
`);

export const Subtitle = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  max-width: 163px;
  font-size: 18px;
  color: #c9f9ae;
  margin-top: 22px;
`;

export const Sparkles = styled(LottieView)`
  position: absolute;
  bottom: 0;
  width: 200px;
  align-self: center;
`;
