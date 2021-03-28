import { ScreenProps } from 'navigator/types';
import Notification from 'models/Notification';

export type Props = ScreenProps<'Notifications'> & {};

export type Item = Notification;

export type RenderItemProps = {
  item: Item;
  index: number;
};

export type ListProps = {
  safeBottom: number;
};
