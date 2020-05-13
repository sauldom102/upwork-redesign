import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type MainStackParams = {
  Home: undefined;
};

export interface MainStackScreenProps<
  ScreenName extends keyof MainStackParams
> {
  navigation: StackNavigationProp<MainStackParams, ScreenName>;
  route: RouteProp<MainStackParams, ScreenName>;
}

export type Props = {};
