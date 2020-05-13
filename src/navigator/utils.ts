import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// eslint-disable-next-line import/prefer-default-export
export const createStack =
  Platform.OS === 'ios' ? createNativeStackNavigator : createStackNavigator;
