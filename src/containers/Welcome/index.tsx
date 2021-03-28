import React, { FC } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'components';
import { Props } from './types';
import { Container, Body, Logo, Button, Or } from './styles';
import useConnect from './connect';

const Welcome: FC<Props> = () => {
  const {
    handlePressContinueWithEmail,
    handlePressSocialButton,
  } = useConnect();

  return (
    <Container>
      <StatusBar light />
      <Body>
        <Logo />
        <Button
          title="Continue with Facebook"
          variant="facebook"
          onPress={handlePressSocialButton}
        />
        <Button
          title="Continue with Google"
          variant="google"
          onPress={handlePressSocialButton}
        />
        {Platform.OS === 'ios' && (
          <Button
            title="Continue with Apple"
            variant="apple"
            onPress={handlePressSocialButton}
          />
        )}
        <Or>or</Or>
        <Button
          title="Continue with your email"
          variant="secondary"
          onPress={handlePressContinueWithEmail}
        />
      </Body>
    </Container>
  );
};

export default Welcome;
