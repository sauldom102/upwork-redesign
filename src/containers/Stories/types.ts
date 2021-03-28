import Story from 'models/Story';
import { ScreenProps } from 'navigator/types';

export type Props = ScreenProps<'Stories'> & {};

export type Item = Story;

export type RenderItemProps = {
  item: Item;
  index: number;
};
