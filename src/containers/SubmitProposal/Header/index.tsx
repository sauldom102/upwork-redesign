import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, CloseButton, CloseIcon, Title } from './styles';

const Header: FC<Props> = ({ title, onPressClose }) => (
  <Container>
    <CloseButton onPress={onPressClose}>
      <CloseIcon />
    </CloseButton>
    <Title>{title}</Title>
  </Container>
);

export default memo(Header);
