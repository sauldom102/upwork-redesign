import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { Item, ListProps, FooterProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const List = Animated.createAnimatedComponent(
  styled(FlatList as new () => FlatList<Item>).attrs<ListProps>(
    ({ headerHeight }) => ({
      contentContainerStyle: {
        paddingTop: headerHeight,
        paddingHorizontal: 15,
      },
    }),
  )<ListProps>``,
);

export const Separator = styled.View`
  height: 15px;
`;

export const Footer = styled.View<FooterProps>`
  height: ${({ safeBottom }) => safeBottom}px;
`;
