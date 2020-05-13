import React, { FC } from 'react';
import { Home } from 'containers';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { mainStackScreenOptions } from './constants';
import { Props, MainStackParams } from './types';
import { createStack } from './utils';

enableScreens();

const MainStack = createStack<MainStackParams>();

const Main = () => (
  <MainStack.Navigator
    screenOptions={mainStackScreenOptions}
    initialRouteName="Home"
  >
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
);

const Navigator: FC<Props> = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default Navigator;
