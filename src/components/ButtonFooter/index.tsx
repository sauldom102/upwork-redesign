import React, { FC, memo } from 'react';
import Button from 'components/Button';
import { Props } from './types';
import { Container } from './styles';

const ButtonFooter: FC<Props> = ({ title, onPress }) => (
  <Container>
    <Button title={title} onPress={onPress} />
  </Container>
);

export default memo(ButtonFooter);
