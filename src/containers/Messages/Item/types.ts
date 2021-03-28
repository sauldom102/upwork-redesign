export type Props = {
  id: string;
  fullName: string;
  role: string;
  photo: string;
  time: string;
  lastMessage?: string;
  lastMessageFromYou?: boolean;
  unread?: number;
  onPress?: (id: string) => void;
};

export type ContainerProps = {
  unread?: boolean;
};

export type LastMessageProps = {
  unread: boolean;
};
