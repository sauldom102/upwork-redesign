import React, { FC, memo } from 'react';
import { VerifiedIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Title } from './styles';

const VerifiedBadge: FC<Props> = ({ title, style }) => (
  <Container style={style}>
    <VerifiedIcon />
    <Title>{title}</Title>
  </Container>
);

export default memo(VerifiedBadge);
