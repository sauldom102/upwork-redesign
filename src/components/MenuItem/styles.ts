import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { BorderlessButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { FocusedProps } from './types';

export const Container = styled(BorderlessButton)``;

export const Content = Animated.createAnimatedComponent(styled.View`
  align-items: center;
  justify-content: center;
`);

export const Icon = styled.View<FocusedProps>`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ focused }) => (focused ? '#F1F9ED' : '#FAFAFA')};
`;

export const Label = styled(Text).attrs<FocusedProps>({
  family: 'Rubik-Medium',
})<FocusedProps>`
  text-transform: uppercase;
  color: ${({ focused, theme }) =>
    focused ? theme.colors.gray0 : theme.colors.gray1};
  font-size: 8px;
  margin-top: 4px;
  text-align: center;
`;

export const BadgeMain = styled.View`
  padding: 1.5px 3.5px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  position: absolute;
  right: 6px;
  bottom: 8px;
`;

export const BadgeText = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 8px;
  color: ${({ theme }) => theme.colors.white};
`;
