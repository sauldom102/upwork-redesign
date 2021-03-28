import React, { FC, memo } from 'react';
import { PremiumIcon, VerifiedStarIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Title } from './styles';

const FullName: FC<Props> = ({
  title,
  verified = false,
  premium = false,
  style,
}) => (
  <Container style={style}>
    {premium && <PremiumIcon />}
    <Title>{title}</Title>
    {verified && <VerifiedStarIcon />}
  </Container>
);

export default memo(FullName);
