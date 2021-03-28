import React, { FC, memo } from 'react';
import { useCustomForm, useInputRefs } from 'utils';
import { INITIAL_VALUES } from '../constants';
import { Props } from './types';
import { Container, TextInput, Button } from './styles';

const Form: FC<Props> = ({ onSubmit }) => {
  const { control, submit, isValid } = useCustomForm({
    defaultValues: INITIAL_VALUES,
    onSubmit,
  });

  const { refs } = useInputRefs(Object.keys(INITIAL_VALUES));

  return (
    <Container>
      <TextInput
        name="email"
        control={control}
        type="email"
        placeholder="Email"
        nextFieldRef={refs.password}
      />
      <TextInput
        innerRef={refs.password}
        name="password"
        control={control}
        type="password"
        placeholder="Password"
        nextFieldRef={refs.confirmPassword}
      />
      <TextInput
        innerRef={refs.confirmPassword}
        name="confirmPassword"
        control={control}
        type="password"
        placeholder="Repeat Password"
      />
      <Button title="Sign up" onPress={submit} enabled={isValid} />
    </Container>
  );
};

export default memo(Form);
