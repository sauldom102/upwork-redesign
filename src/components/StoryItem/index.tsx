import React, { FC, useCallback, memo } from 'react';
import Avatar from './Avatar';
import { Container, Username } from './styles';
import { Props } from './types';

const StoryItem: FC<Props> = ({
  id,
  photo,
  username,
  hasStories = true,
  onPress,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress}>
      <Avatar photo={photo} hasStories={hasStories} />
      <Username>{username}</Username>
    </Container>
  );
};

export default memo(StoryItem);
