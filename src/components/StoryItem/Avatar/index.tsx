import React, { FC, memo } from 'react';
import { CircleGradient } from 'components/Icons';
import { Props } from './types';
import { Container, Photo } from './styles';

const Avatar: FC<Props> = ({ photo, size = 60, hasStories = false }) => {
  let gradientColors;
  if (hasStories) gradientColors = ['#EB36AC', '#F85A4D', '#FF9232'];

  return (
    <Container>
      {gradientColors && <CircleGradient size={size} colors={gradientColors} />}
      <Photo source={{ uri: photo }} size={size} hasStories={hasStories} />
    </Container>
  );
};

export default memo(Avatar);
