import subDays from 'date-fns/subDays';
import uuidv4 from 'uuid/v4';
import faker from 'faker';
import User from '.';

const now = new Date();

const randomUsername = (
  maxLength: number,
  firstName: string,
  lastName: string,
) => {
  let username = faker.internet.userName(firstName, lastName);
  while (username.length > maxLength) {
    username = faker.internet.userName(firstName, lastName);
  }
  return username;
};

const USERS = [
  {
    username: 'sauldom102',
    fullName: 'Saul Dominguez',
    joinedAt: subDays(now, 142),
    photo:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2231&q=100',
  },
  {
    username: 'johnlennon',
    fullName: 'John Lennon',
    joinedAt: subDays(now, 421),
    photo:
      'https://images.unsplash.com/photo-1518693800412-ad92111a1d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=100',
  },
  {
    username: 'minasundwall',
    fullName: 'Mina Sundwall',
    joinedAt: subDays(now, 813),
    photo:
      'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&h=450&q=100',
  },
  ...new Array(30).fill(null).map(() => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const photo = faker.image.avatar();

    return {
      username: randomUsername(10, firstName, lastName),
      fullName: `${firstName} ${lastName}`,
      joinedAt: subDays(now, 923),
      photo,
    };
  }),
].map((u) => ({
  ...u,
  id: uuidv4(),
})) as User[];

export const APP_USER = {
  id: uuidv4(),
  username: 'chatdate',
  fullName: 'ChatDate',
  joinedAt: subDays(now, 2000),
  photo:
    'https://images.unsplash.com/photo-1551844547-043f512dc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&h=450&q=100',
};

export default USERS;
