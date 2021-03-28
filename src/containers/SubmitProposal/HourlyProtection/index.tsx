import React, { FC, memo } from 'react';
import { MoneyProtectionIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Main, Icon, Body, Title, Subtitle } from './styles';

const HourlyProtection: FC<Props> = ({ onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <Main>
      <Icon>
        <MoneyProtectionIcon />
      </Icon>
      <Body>
        <Title>Includes Jobhunt Hourly Protection</Title>
        <Subtitle>Learn more</Subtitle>
      </Body>
    </Main>
  </Container>
);

export default memo(HourlyProtection);
