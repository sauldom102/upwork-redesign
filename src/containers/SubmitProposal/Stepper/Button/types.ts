export type Variant = '+' | '-';

export type Props = {
  variant: Variant;
  onPress?: (variant: Variant) => void;
};
