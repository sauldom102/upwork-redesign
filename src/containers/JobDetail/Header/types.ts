export type Props = {
  title: string;
  subtitle: string;
  isFave?: boolean;
  onPressBack?: () => void;
  onPressFave?: () => void;
};
