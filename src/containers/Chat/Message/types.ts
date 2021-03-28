import Message from 'models/Message';

export type Props = {
  msg: Message;
  onPress?: (msg: Message) => void;
};

export type ContainerProps = {
  fromMe: boolean;
  hasPhoto: boolean;
};

export type TextProps = {
  fromMe: boolean;
};
