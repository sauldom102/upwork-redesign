import React, { FC, memo } from 'react';
import { useCustomFormController } from 'utils';
import Switch from 'components/Switch';
import { Props } from './types';
import { Container, Main, Label } from './styles';

const LabeledSwitch: FC<Props> = ({ name, control, label, style }) => {
  const { toggle } = useCustomFormController({ name, control });

  return (
    <Container onPress={toggle} style={style}>
      <Main>
        <Label>{label}</Label>
        <Switch name={name} control={control} />
      </Main>
    </Container>
  );
};

export default memo(LabeledSwitch);
