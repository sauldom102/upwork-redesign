export type Props = {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  paymentVerified?: boolean;
  fave?: boolean;
  onPress?: (id: string) => void;
  onPressFave?: (id: string) => void;
  onPressClose?: (id: string) => void;
};

export type LogicParams = Pick<
  Props,
  'id' | 'onPress' | 'onPressFave' | 'onPressClose'
>;

export type BodyProps = {
  featured: boolean;
};
