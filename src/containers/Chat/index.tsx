import React, { FC, useCallback } from 'react';
import {
  Container,
  Messages,
  Separator,
  NewMessageContainer,
  Input,
  MessagesFooter,
  Body,
} from './styles';
import { Props } from './types';
import Message from './Message';
import Writing from './Writing';
import Header from './Header';
import useConnect from './connect';

const Chat: FC<Props> = () => {
  const {
    writing,
    user,
    handleGoBack,
    handleMessagePress,
    extractKeyFromMessage,
    messageIndex,
    handleSubmit,
    messages,
    message,
    setMessage,
  } = useConnect();

  const renderMessage = useCallback(
    ({ item }) => <Message msg={item} onPress={handleMessagePress} />,
    [handleMessagePress],
  );

  const renderSeparator = useCallback(
    ({ leadingItem }) => {
      const index = messageIndex(leadingItem);
      const previousMessage = messages[index + 1];
      return (
        <Separator fromSame={leadingItem.fromMe === previousMessage.fromMe} />
      );
    },
    [messageIndex, messages],
  );

  const { fullName } = user;
  const renderHeader = useCallback(
    () => (writing ? <Writing fullName={fullName} /> : null),
    [writing, fullName],
  );

  return (
    <Container>
      <Header
        fullName={user.fullName}
        photo={user.photo}
        username={user.username}
        onPressBack={handleGoBack}
      />
      <Body>
        <Messages
          data={messages}
          renderItem={renderMessage}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={MessagesFooter}
          showsVerticalScrollIndicator={false}
          keyExtractor={extractKeyFromMessage}
          inverted
        />
        <NewMessageContainer>
          <Input
            placeholder="Type a messagee..."
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
            editable
          />
        </NewMessageContainer>
      </Body>
    </Container>
  );
};

export default Chat;
