import JobOffer from 'models/JobOffer';
import { ScreenProps } from 'navigator/types';
import { ListRenderItemInfo } from 'react-native';

export type Props = ScreenProps<'Home'> & {};

export type Item = JobOffer;

export type RenderItemProps = ListRenderItemInfo<Item>;

export type ListProps = {
  headerHeight: number;
};

export type FooterProps = {
  safeBottom: number;
};
