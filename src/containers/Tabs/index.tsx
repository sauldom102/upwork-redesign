import React, { FC, memo } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabBarBottom as TabBar } from 'components';
import Home from '../Home';
import Messages from '../Messages';
import Notifications from '../Notifications';
import Profile from '../Profile';
import Proposals from '../Proposals';

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const Tabs: FC = () => (
  <Tab.Navigator tabBar={tabBar}>
    <Tab.Screen name="Jobs" component={Home} />
    <Tab.Screen name="Proposals" component={Proposals} />
    <Tab.Screen name="Messages" component={Messages} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default memo(Tabs);
