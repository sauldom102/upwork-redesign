import React, { FC, memo } from 'react';
import { PuzzlePieceIcon } from 'components/Icons';
import { Container, Title } from './styles';
import { Props } from './types';

const Featured: FC<Props> = () => (
  <Container>
    <PuzzlePieceIcon />
    <Title>Featured Job</Title>
  </Container>
);

export default memo(Featured);
