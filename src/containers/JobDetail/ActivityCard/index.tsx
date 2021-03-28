import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Body, FeatItem } from './styles';

const ActivityCard: FC<Props> = ({ feats, style }) => (
  <Container style={style}>
    <Title>Activity On This Job</Title>
    <Body>
      {feats.map((feat) => (
        <FeatItem
          key={feat.title}
          title={feat.title}
          subtitle={feat.subtitle}
        />
      ))}
    </Body>
  </Container>
);

export default memo(ActivityCard);
