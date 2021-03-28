import uuidv4 from 'uuid/v4';
import Conversation from '.';

const CONVERSATIONS: Conversation[] = [
  {
    fullName: 'Maria Lysenko',
    role: 'Product Designer for Figma',
    photo:
      'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=450&h=450',
    time: '07:34 PM',
    lastMessage:
      'I had uploaded new files to trello, please follow up this conversation so we can get into it.',
    lastMessageFromYou: true,
    unread: 2,
  },
  {
    fullName: 'Steve Rogers',
    role: 'Trello Team',
    photo:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=450&h=450',
    time: '07:34 PM',
    lastMessage:
      'I had uploaded new files to trello, please follow up this conversation so we can get into it.',
    lastMessageFromYou: true,
  },
  {
    fullName: 'Natasha Romanoff',
    role: 'Apple Inc.',
    photo:
      'https://images.unsplash.com/photo-1495994869359-2f563579a25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=250&h=250',
    time: '07:34 PM',
    lastMessage:
      'I had uploaded new files to trello, please follow up this conversation so we can get into it.',
    lastMessageFromYou: true,
  },
  {
    fullName: 'Peter Parker',
    role: 'React Native Developer for Coinbase',
    photo:
      'https://images.unsplash.com/photo-1572542006263-35bf4f578b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=450&h=450',
    time: '07:34 PM',
    lastMessage:
      'I had uploaded new files to trello, please follow up this conversation so we can get into it.',
    lastMessageFromYou: true,
  },
  {
    fullName: 'Nora Hutton',
    role: 'Product Designer for Meta',
    photo:
      'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=450&h=450',
    time: '07:34 PM',
    lastMessage:
      'I had uploaded new files to trello, please follow up this conversation so we can get into it.',
    lastMessageFromYou: true,
  },
].map((c) => ({ ...c, id: uuidv4(), photo: `${c.photo}&w=250&h=250&q=100` }));

export default CONVERSATIONS;
