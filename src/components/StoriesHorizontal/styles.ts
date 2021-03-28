import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Item } from './types';

export const List = styled(FlatList as new () => FlatList<Item>).attrs({
  horizontal: true,
  alwaysBounceHorizontal: false,
  showsHorizontalScrollIndicator: false,
})``;

export const Separator = styled.View`
  width: 8px;
`;
