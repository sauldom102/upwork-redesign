import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFlatListToTop } from 'utils';
import STORIES from 'models/Story/mock';
import USERS from 'models/User/mock';
import { Props, Item } from './types';

const useConnect = () => {
  const { navigate } = useNavigation<Props['navigation']>();

  const { list } = useFlatListToTop();

  const keyExtractor = useCallback((item: Item) => item.id, []);

  const handlePressAdd = useCallback(() => {}, []);

  const handlePressStoryItem = useCallback(
    (id: string) => {
      const idx = STORIES.findIndex((s) => s.id === id);
      if (idx !== -1) {
        navigate('Stories', {
          stories: STORIES.slice(idx),
        });
      }
    },
    [navigate],
  );

  const handlePressConversation = useCallback(() => {
    navigate('Chat', {
      userId: USERS[0].id,
    });
  }, [navigate]);

  return {
    list,
    keyExtractor,
    handlePressAdd,
    handlePressConversation,
    handlePressStoryItem,
  };
};

export default useConnect;
