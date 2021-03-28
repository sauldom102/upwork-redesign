import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import Story from 'models/Story';
import { absoluteFill } from 'theme/snippets';

export const Container = Animated.createAnimatedComponent(styled.View`
  flex: 1;
  background-color: #000;
  overflow: hidden;
`);

export const List = Animated.createAnimatedComponent(
  styled(FlatList as new () => FlatList<Story>).attrs(({ theme }) => ({
    snapToInterval: theme.device.width,
  }))``,
);

export const Overlay = Animated.createAnimatedComponent(styled.View`
  ${absoluteFill};
  background-color: #000;
`);
