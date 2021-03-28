import React, { FC, memo, useCallback } from 'react';
import { Props } from './types';
import {
  Container,
  Main,
  PhotoContainer,
  Photo,
  Body,
  FullName,
  Role,
  LastMessage,
  Right,
  Time,
  BadgeMain,
  BadgeText,
} from './styles';

const Item: FC<Props> = ({
  id,
  photo,
  fullName,
  role,
  lastMessage,
  lastMessageFromYou,
  time,
  unread,
  onPress,
}) => {
  const lastMessageTitle = `${lastMessageFromYou ? 'You: ' : ''}${lastMessage}`;

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress} unread={!!unread}>
      <Main>
        <PhotoContainer>
          <Photo source={{ uri: photo }} />
        </PhotoContainer>
        <Body>
          <FullName>{fullName}</FullName>
          <Role>{role}</Role>
          {!!lastMessage && (
            <LastMessage unread={!!unread} numberOfLines={1}>
              {lastMessageTitle}
            </LastMessage>
          )}
        </Body>
        <Right>
          <Time>{time}</Time>
          {!!unread && (
            <BadgeMain>
              <BadgeText>{unread}</BadgeText>
            </BadgeMain>
          )}
        </Right>
      </Main>
    </Container>
  );
};

export default memo(Item);
