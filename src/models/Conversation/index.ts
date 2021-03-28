type Conversation = {
  id: string;
  fullName: string;
  role: string;
  photo: string;
  time: string;
  lastMessage?: string;
  lastMessageFromYou?: boolean;
  unread?: number;
};

export default Conversation;
