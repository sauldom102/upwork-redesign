import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, AddButton } from './styles';

const TabScreenHeader: FC<Props> = ({ title, onPressAdd }) => (
  <Container>
    <Title>{title}</Title>
    {onPressAdd && <AddButton onPress={onPressAdd} />}
  </Container>
);

export default memo(TabScreenHeader);
