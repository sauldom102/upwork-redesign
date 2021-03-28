import React, { FC, memo } from 'react';
import { useWatch } from 'react-hook-form';
import { useCustomFormController } from 'utils';
import { Props } from './types';
import { Switch as SwitchBase } from './styles';

const Switch: FC<Props> = ({ name, control, style }) => {
  const { toggle } = useCustomFormController({ name, control });

  const value = useWatch({
    name,
    control,
  });

  return <SwitchBase value={value} onSyncPress={toggle} style={style} />;
};

export default memo(Switch);
