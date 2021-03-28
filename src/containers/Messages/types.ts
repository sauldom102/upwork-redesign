import { ScreenProps } from 'navigator/types';
import Conversation from 'models/Conversation';

export type Props = ScreenProps<'Messages'> & {};

export type Item = Conversation;

export type RenderItemProps = {
  item: Item;
  index: number;
};
