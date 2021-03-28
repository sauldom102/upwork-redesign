import { ListRenderItemInfo, ViewStyle } from 'react-native';
import { Props as StoryItemProps } from '../StoryItem/types';

export type Item = Omit<StoryItemProps, 'hasStories' | 'onPress'>;

export type RenderItemProps = ListRenderItemInfo<Item>;

export interface Props {
  items: Item[];
  style?: ViewStyle;
  onPressItem?: (id: string) => void;
}
