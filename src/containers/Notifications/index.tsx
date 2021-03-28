import React, { FC, useCallback } from 'react';
import { TabScreenHeader, StatusBar } from 'components';
import { Props, RenderItemProps } from './types';
import { Container, List, ListHeader, Separator } from './styles';
import Item from './Item';
import useConnect from './connect';

const Notifications: FC<Props> = () => {
  const {
    list,
    items,
    safeBottom,
    keyExtractor,
    handlePressClose,
  } = useConnect();

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <Item
        id={item.id}
        text={item.text}
        time={item.time}
        onPressClose={handlePressClose}
      />
    ),
    [handlePressClose],
  );

  return (
    <Container>
      <StatusBar />
      <TabScreenHeader title="Notifications" />
      <List
        ref={list}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={handleRenderItem}
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={Separator}
        safeBottom={safeBottom}
      />
    </Container>
  );
};

export default Notifications;
