import uuidv4 from 'uuid/v4';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import Message from '.';

const now = Date.now();

const MESSAGES = [
  {
    at: addSeconds(now, 0),
    text: 'Hii',
    seen: true,
  },
  {
    at: addSeconds(now, 10),
    text: 'Heyy',
    seen: true,
    fromMe: true,
  },
  {
    at: addSeconds(now, 15),
    text: "How's it going?",
    seen: true,
  },
  {
    at: addSeconds(now, 24),
    text: "This last weekend has been great! You should've came with us",
    seen: true,
    fromMe: true,
  },
  {
    at: addSeconds(now, 112),
    photo:
      'https://images.unsplash.com/photo-1574262002906-870827450578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=100',
    seen: true,
    fromMe: true,
  },
  {
    at: addSeconds(now, 64),
    photo:
      'https://images.unsplash.com/photo-1485909473307-a4b49634c861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=100',
    seen: true,
  },
  {
    at: addSeconds(now, 136),
    text: 'Look at this!',
    seen: true,
    fromMe: true,
  },
  {
    at: addSeconds(now, 138),
    text: 'Wow so cool! 🏖️',
    seen: true,
  },
]
  .map((m) => ({
    ...m,
    id: uuidv4(),
    fromMe: !!m?.fromMe,
    previewAt: format(m.at, 'HH:mm'),
  }))
  .sort((a, b) => b.at.getTime() - a.at.getTime()) as Message[];

export default MESSAGES;
