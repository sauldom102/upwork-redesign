import React, { FC } from 'react';
import { Welcome, SignUp, SignIn } from 'containers';
import { Props, Params } from '../types';
import { createStack } from '../utils';

const Stack = createStack<Params>();

const AuthNavigator: FC<Props> = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

export default AuthNavigator;
