import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Text } from 'components';

export const Container = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`);

export const Title = Animated.createAnimatedComponent(styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  position: absolute;
  top: ${({ theme }) => theme.device.safeTop + 14}px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`);

export const Right = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  bottom: 12px;
  flex-direction: row;
  align-items: center;
`);

export const Currency = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 14px;
  color: #c9f9ae;
`;

export const Amount = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1px;
`;
