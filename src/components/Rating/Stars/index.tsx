import React, { FC, memo } from 'react';
import range from 'lodash/range';
import { Props } from './types';
import { Container, Star } from './styles';

const Stars: FC<Props> = ({ value }) => (
  <Container>
    {range(5).map((i) => (
      <Star key={`${i}`} last={i === 4} active={i < value} />
    ))}
  </Container>
);

export default memo(Stars);
