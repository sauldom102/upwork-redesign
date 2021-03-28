import React, { FC, memo, useCallback } from 'react';
import { useCustomFormController } from 'utils';
import { Props } from './types';
import { Container, SideText, Body, Value } from './styles';
import Button from './Button';

const Stepper: FC<Props> = ({ name, control, size = 'm', style }) => {
  const { onChange, value } = useCustomFormController({ name, control });

  const handleSubstract = useCallback(() => {
    onChange(Math.max(0, value - 1));
  }, [onChange, value]);

  const handleAdd = useCallback(() => {
    onChange(Math.min(50, value + 1));
  }, [onChange, value]);

  return (
    <Container style={style}>
      <SideText active>$</SideText>
      <Body size={size}>
        <Button variant="-" onPress={handleSubstract} />
        <Value size={size}>{value}</Value>
        <Button variant="+" onPress={handleAdd} />
      </Body>
      <SideText>/hr</SideText>
    </Container>
  );
};

export default memo(Stepper);
