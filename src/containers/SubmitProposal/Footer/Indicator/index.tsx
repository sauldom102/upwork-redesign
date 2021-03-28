import React, { FC, memo } from 'react';
import range from 'lodash/range';
import { Container } from './styles';
import { Props } from './types';
import Bullet from './Bullet';

const Indicator: FC<Props> = ({ count, current, style }) => (
  <Container style={style}>
    {range(count).map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Bullet key={`dot_${i}`} active={current === i} last={i === count - 1} />
    ))}
  </Container>
);

export default memo(Indicator);
