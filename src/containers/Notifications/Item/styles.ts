import styled from 'styled-components/native';
import HTML from 'react-native-render-html';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { IconButton, Text } from 'components';

export const Pan = styled(PanGestureHandler)``;

export const Container = Animated.createAnimatedComponent(styled.View`
  overflow: hidden;
`);

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 15px;
`;

export const Body = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const Title = styled(HTML).attrs(({ theme }) => ({
  tagsStyles: {
    p: {
      fontSize: 11,
      color: theme.colors.gray0,
      lineHeight: 18,
    },
    b: {
      color: theme.colors.primary,
    },
  },
}))``;

export const Time = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-right: 10px;
`;

export const Close = Animated.createAnimatedComponent(styled.View``);

export const CloseButton = styled(IconButton).attrs(({ theme }) => ({
  iconColor: theme.colors.white,
  bgColor: theme.colors.primary,
  type: 'remove',
  size: 'xs',
}))`
  box-shadow: 0 2px 4px rgba(27, 83, 6, 0.15);
`;
