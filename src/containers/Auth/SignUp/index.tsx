import React, { FC } from 'react';
import { StatusBar, Header } from 'components';
import { Props } from './types';
import { Container, Body, BottomButton } from './styles';
import Form from './Form';
import useConnect from './connect';

const SignUp: FC<Props> = () => {
  const {
    handleSubmit,
    handlePressBack,
    handlePressBottomButton,
  } = useConnect();

  return (
    <Container>
      <StatusBar />
      <Header title="Sign up" onPressGoBack={handlePressBack} />
      <Body>
        <Form onSubmit={handleSubmit} />
      </Body>
      <BottomButton
        title="I already have an account"
        onPress={handlePressBottomButton}
      />
    </Container>
  );
};

export default SignUp;
