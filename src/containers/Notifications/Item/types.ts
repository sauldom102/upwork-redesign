export type Props = {
  id: string;
  text: string;
  time: string;
  onPressClose?: (id: string) => void;
};

export type UseLogicParams = Pick<Props, 'id' | 'onPressClose'>;

export type ContainerProps = {
  unread?: boolean;
};

export type LastMessageProps = {
  unread: boolean;
};
