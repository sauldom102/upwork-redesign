import React, { FC, memo } from 'react';
import TextInput from 'components/TextInput';
import { Props } from './types';
import useLogic from './logic';

const FormTextInput: FC<Props> = ({ name, control, ...extraProps }) => {
  const { error, onChangeText, onBlur, value } = useLogic({
    name,
    control,
  });

  return (
    <TextInput
      error={error?.message}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      {...extraProps}
    />
  );
};

export default memo(FormTextInput);
