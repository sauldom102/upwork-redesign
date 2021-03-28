export enum MediaType {
  PHOTO = 'photo',
  VIDEO = 'video',
}

export type Media = {
  id: string;
  type: MediaType;
  url: string;
  duration?: number;
  skip?: number;
};

type Story = {
  id: string;
  media: Media[];
  username: string;
  userPhoto: string;
};

export default Story;
