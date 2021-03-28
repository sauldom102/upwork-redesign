import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Loader, Title } from './styles';

const Writing: FC<Props> = ({ fullName }) => (
  <Container>
    <Loader />
    <Title>{`${fullName} is typing...`}</Title>
  </Container>
);

export default memo(Writing);
