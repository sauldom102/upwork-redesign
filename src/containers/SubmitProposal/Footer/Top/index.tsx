import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Left, Title, Subtitle, Stepper } from './styles';

const Top: FC<Props> = ({ title, subtitle, control }) => (
  <Container>
    <Left>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Left>
    <Stepper name="amountReceived" size="s" control={control} />
  </Container>
);

export default memo(Top);
