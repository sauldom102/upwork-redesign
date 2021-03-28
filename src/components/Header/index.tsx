import React, { FC, memo, useEffect } from 'react';
import { useLayout } from '@react-native-community/hooks';
import { Props } from './types';
import { Container, Side, Title, BackButton } from './styles';

const Header: FC<Props> = ({ title, onPressGoBack, onHeight }) => {
  const { onLayout, height } = useLayout();

  useEffect(() => {
    if (onHeight) {
      onHeight(height);
    }
  }, [height, onHeight]);

  return (
    <Container onLayout={onLayout}>
      <Side>
        <BackButton onPress={onPressGoBack} />
      </Side>
      <Title>{title}</Title>
      <Side />
    </Container>
  );
};

export default memo(Header);
