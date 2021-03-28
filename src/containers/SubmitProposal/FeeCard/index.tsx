import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Main, Title, Bolded, Subtitle } from './styles';

const FeeCard: FC<Props> = ({ onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <Main>
      <Title>
        <Bolded>$ -7.00</Bolded> /hr 20% Jobhunt Service Fee
      </Title>
      <Subtitle>What is that?</Subtitle>
    </Main>
  </Container>
);

export default memo(FeeCard);
