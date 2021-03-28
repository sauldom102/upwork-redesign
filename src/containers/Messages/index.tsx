import React, { FC, useCallback } from 'react';
import { TabScreenHeader, StatusBar } from 'components';
import CONVERSATIONS from 'models/Conversation/mock';
import STORIES from 'models/Story/mock';
import { Props, RenderItemProps } from './types';
import { Container, List, StoriesHorizontal, Separator } from './styles';
import Item from './Item';
import useConnect from './connect';

const Messages: FC<Props> = () => {
  const {
    list,
    keyExtractor,
    handlePressAdd,
    handlePressConversation,
    handlePressStoryItem,
  } = useConnect();

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <Item
        id={item.id}
        fullName={item.fullName}
        role={item.role}
        photo={item.photo}
        time={item.time}
        lastMessage={item.lastMessage}
        lastMessageFromYou={item.lastMessageFromYou}
        unread={item.unread}
        onPress={handlePressConversation}
      />
    ),
    [handlePressConversation],
  );

  const handleRenderHeader = useCallback(
    () => (
      <StoriesHorizontal
        items={STORIES.map((s) => ({
          id: s.id,
          username: s.username,
          photo: s.userPhoto,
        }))}
        onPressItem={handlePressStoryItem}
      />
    ),
    [handlePressStoryItem],
  );

  return (
    <Container>
      <StatusBar />
      <TabScreenHeader title="Messages" onPressAdd={handlePressAdd} />
      <List
        ref={list}
        data={CONVERSATIONS}
        keyExtractor={keyExtractor}
        renderItem={handleRenderItem}
        ListHeaderComponent={handleRenderHeader}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export default Messages;
