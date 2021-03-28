import React, { FC, memo, useCallback } from 'react';
import StoryItem from 'components/StoryItem';
import { Props, Item, RenderItemProps } from './types';
import { List, Separator } from './styles';

const StoriesHorizontal: FC<Props> = ({ items, style, onPressItem }) => {
  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <StoryItem
        id={item.id}
        username={item.username}
        photo={item.photo}
        onPress={onPressItem}
      />
    ),
    [onPressItem],
  );

  const extractStoryKey = useCallback((item: Item) => item.id, []);

  return (
    <List
      data={items}
      renderItem={handleRenderItem}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={Separator}
      ListFooterComponent={Separator}
      keyExtractor={extractStoryKey}
      style={style}
    />
  );
};

export default memo(StoriesHorizontal);
