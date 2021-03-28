import React, { FC } from 'react';
import { JobDetail, Stories, Chat, SubmitProposal, Settings } from 'containers';
import Tabs from 'containers/Tabs';
import { enableScreens } from 'react-native-screens';
import { mainStackScreenOptions } from './constants';
import { Props, Params } from './types';
import { createStack } from './utils';
import AuthNavigator from './Auth';
import useConnect from './connect';

enableScreens();

const RootStack = createStack<Params>();
const MainStack = createStack<Params>();

const Main = () => (
  <MainStack.Navigator
    screenOptions={mainStackScreenOptions}
    initialRouteName="Tabs"
  >
    <MainStack.Screen name="Tabs" component={Tabs} />
    <MainStack.Screen name="JobDetail" component={JobDetail} />
    <MainStack.Screen name="Chat" component={Chat} />
    <MainStack.Screen name="Settings" component={Settings} />
  </MainStack.Navigator>
);

const Navigator: FC<Props> = () => {
  const { loggedIn } = useConnect();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        stackPresentation: 'transparentModal',
      }}
    >
      {loggedIn ? (
        <>
          <RootStack.Screen name="Main" component={Main} />
          <RootStack.Screen name="Stories" component={Stories} />
          <RootStack.Screen name="SubmitProposal" component={SubmitProposal} />
        </>
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default Navigator;
