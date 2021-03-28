import React, { FC, memo, useCallback } from 'react';
import { AddIcon, SubstractIcon } from 'components/Icons';
import { Props } from './types';
import { Container, Main } from './styles';

const Button: FC<Props> = ({ variant, onPress }) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(variant);
    }
  }, [onPress, variant]);

  return (
    <Container onPress={handlePress}>
      <Main>
        {variant === '+' && <AddIcon />}
        {variant === '-' && <SubstractIcon />}
      </Main>
    </Container>
  );
};

export default memo(Button);
