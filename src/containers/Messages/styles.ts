import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StoriesHorizontal as BaseStoriesHorizontal } from 'components';
import { Item } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const List = styled(FlatList as new () => FlatList<Item>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
  alwaysBounceVertical: false,
})``;

export const Separator = styled.View`
  height: 5px;
`;

export const StoriesHorizontal = styled(BaseStoriesHorizontal)`
  margin: 12px -15px;
  padding: 0 12px;
`;
