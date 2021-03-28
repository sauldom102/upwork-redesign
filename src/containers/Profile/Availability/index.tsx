import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Body, FeatItem } from './styles';

const Availability: FC<Props> = ({ style }) => (
  <Container style={style}>
    <Title>Availability</Title>
    <Body>
      <FeatItem title="> 30" subtitle="Hrs per Week" />
      <FeatItem title="< 24" subtitle="Hrs Response Time" />
    </Body>
  </Container>
);

export default memo(Availability);
