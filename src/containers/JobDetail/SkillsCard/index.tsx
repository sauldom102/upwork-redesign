import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Body, Badge } from './styles';

const SkillsCard: FC<Props> = ({ skills, style }) => (
  <Container style={style}>
    <Title>Skills and Expertise</Title>
    <Body>
      {skills.map((s) => (
        <Badge key={s} title={s} />
      ))}
    </Body>
  </Container>
);

export default memo(SkillsCard);
