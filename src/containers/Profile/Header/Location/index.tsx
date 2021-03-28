import React, { FC, memo } from 'react';
import { LocationIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Title } from './styles';

const FullName: FC<Props> = ({ title, style }) => (
  <Container style={style}>
    <LocationIcon />
    <Title>{title}</Title>
  </Container>
);

export default memo(FullName);
