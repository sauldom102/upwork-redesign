import React, { FC, memo, useCallback } from 'react';
import { RectCheckIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Main, Icon, Title, Amount } from './styles';

const Item: FC<Props> = ({ id, title, amount, onPress, style }) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress} style={style}>
      <Main>
        <Icon>
          <RectCheckIcon />
        </Icon>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
      </Main>
    </Container>
  );
};

export default memo(Item);
