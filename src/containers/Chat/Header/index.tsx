import React, { FC, memo } from 'react';
import { BackButton } from 'components';
import Avatar from 'components/StoryItem/Avatar';
import { Props } from './types';
import { Container, Body, Names, FullName, Username, Status } from './styles';

const Header: FC<Props> = ({ photo, fullName, username, onPressBack }) => (
  <Container>
    <BackButton onPress={onPressBack} />
    <Avatar photo={photo} size={44} />
    <Body>
      <Names>
        <FullName>{`${fullName} `}</FullName>
        <Username>{`@${username}`}</Username>
      </Names>
      <Status>connected</Status>
    </Body>
  </Container>
);

export default memo(Header);
