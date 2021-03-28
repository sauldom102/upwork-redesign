import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Subtitle, VerifiedIcon } from './styles';

const Item: FC<Props> = ({
  title,
  subtitle,
  verified,
  withVerifiedText,
  style,
}) => (
  <Container style={style}>
    <Title>{title}</Title>
    {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
    {verified && (
      <>
        <VerifiedIcon />
        {withVerifiedText && <Subtitle>Verified</Subtitle>}
      </>
    )}
  </Container>
);

export default memo(Item);
