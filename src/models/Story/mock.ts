import uuidv4 from 'uuid/v4';
import Story, { MediaType } from '.';

const STORIES: Story[] = [
  {
    username: 'mlysenko',
    userPhoto:
      'https://images.unsplash.com/photo-1599140782241-144735f5949a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&h=250&q=100',
    media: [
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1628869503966-f559b82b8f7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80',
        duration: 5000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1628815756608-c8ac0cacf20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        duration: 5000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1577017452719-6513f6300a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        duration: 5000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1528158830489-3ba27c0c9325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1289&q=80',
        duration: 3000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        duration: 3000,
      },
    ],
  },
  {
    username: 'mlysenko',
    userPhoto:
      'https://images.unsplash.com/photo-1599140782241-144735f5949a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&h=250&q=100',
    media: [
      {
        type: MediaType.VIDEO,
        url:
          'https://assets.mixkit.co/videos/preview/mixkit-a-man-doing-jumping-tricks-at-the-beach-1222-large.mp4',
        duration: 18000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=993&q=80',
        duration: 5000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        duration: 3000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1605714048976-892f6b95320e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        duration: 5000,
      },
      {
        type: MediaType.PHOTO,
        url:
          'https://images.unsplash.com/photo-1565457210787-a4e17b40f04e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        duration: 3000,
      },
    ],
  },
].map((s) => ({
  ...s,
  id: uuidv4(),
  media: s.media.map((m) => ({ ...m, id: uuidv4() })),
}));

export const getStoryById = (storyId: string) =>
  STORIES.find((s) => s.id === storyId);

export default STORIES;
