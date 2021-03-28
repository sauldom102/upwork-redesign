import React, { FC, memo } from 'react';
import { ChevronLeftIcon } from 'components/Icons';
import { Props } from './types';
import { Container } from './styles';

const BackButton: FC<Props> = ({ onPress }) => (
  <Container onPress={onPress}>
    <ChevronLeftIcon />
  </Container>
);

export default memo(BackButton);
