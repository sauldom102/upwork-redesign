type OnPressParams = {
  routeName: string;
  routeKey?: string;
  isFocused: boolean;
};

export type Props = {
  isFocused?: boolean;
  title?: string;
  routeName: string;
  routeKey?: string;
  badge?: number;
  onPress?: (params: OnPressParams) => void;
};

export type FocusedProps = {
  focused: boolean;
};
