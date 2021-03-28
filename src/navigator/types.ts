import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Story from 'models/Story';

export type Params = {
  Home: undefined;
  JobDetail: {
    id: string;
  };
  Messages: undefined;
  Notifications: undefined;
  Stories: {
    stories: Story[];
  };
  Chat: {
    userId: string;
  };
  SubmitProposal: undefined;
  Profile: {
    id: string;
  };
  Proposals: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Settings: undefined;
  Welcome: undefined;
};

export interface ScreenProps<ScreenName extends keyof Params> {
  navigation: StackNavigationProp<Params, ScreenName>;
  route: RouteProp<Params, ScreenName>;
}

export type Props = {};
