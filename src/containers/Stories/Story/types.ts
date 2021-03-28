import { Media } from 'models/Story';

export type Props = {
  index: number;
  media: Media[];
  userPhoto?: string;
  username: string;
  onFinish?: (index: number) => void;
  active?: boolean;
};
