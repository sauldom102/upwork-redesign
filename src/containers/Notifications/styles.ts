import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Item, ListProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const List = styled(FlatList as new () => FlatList<Item>).attrs<
  ListProps
>(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingHorizontal: 15,
    paddingBottom: safeBottom,
  },
  alwaysBounceVertical: false,
}))<ListProps>``;

export const ListHeader = styled.View`
  height: 7px;
`;

export const Separator = styled.View`
  height: 5px;
`;
