import React, { FC, memo } from 'react';
import { IconButton, BackButton } from 'components';
import { Props } from './types';
import { Container, Main, SecText, Title, Subtitle } from './styles';

const Header: FC<Props> = ({
  title,
  subtitle,
  isFave = false,
  onPressFave,
  onPressBack,
}) => (
  <Container>
    <BackButton onPress={onPressBack} />
    <Main>
      <SecText>Hourly - Posted 2 hours ago</SecText>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Main>
    <IconButton type="fave" active={isFave} onPress={onPressFave} />
  </Container>
);

export default memo(Header);
