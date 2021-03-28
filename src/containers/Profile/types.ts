import { ScreenProps } from 'navigator/types';

export type Props = ScreenProps<'Profile'> & {};

export type BodyProps = {
  headerHeight: number;
  safeBottom: number;
};
