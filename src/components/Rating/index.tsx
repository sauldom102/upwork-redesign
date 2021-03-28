import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title } from './styles';
import Stars from './Stars';

const Rating: FC<Props> = ({ value, total }) => (
  <Container>
    <Stars value={value} />
    <Title>{`${value}.0${total ? ` of ${total} Review` : ''}`}</Title>
  </Container>
);

export default memo(Rating);
