import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Subtitle } from './styles';

const FeatItem: FC<Props> = ({ title, subtitle, style }) => (
  <Container style={style}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default memo(FeatItem);
