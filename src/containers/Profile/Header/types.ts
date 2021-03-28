import { Props as MenuItemProps } from 'components/MenuItem/types';

export type Props = {
  fullName: string;
  jobSuccess: number;
  location: string;
  premium?: boolean;
  verified?: boolean;
  onPressMenuItem?: MenuItemProps['onPress'];
};
