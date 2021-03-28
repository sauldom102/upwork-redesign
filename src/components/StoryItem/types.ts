export type Props = {
  id: string;
  photo: string;
  username: string;
  hasStories?: boolean;
  onPress?: (id: string) => void;
};
