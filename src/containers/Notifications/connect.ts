import { useCallback, useState } from 'react';
import { useTabScreenBottomSpacing, useFlatListToTop } from 'utils';
import NOTIFICATIONS from 'models/Notification/mock';
import { Item } from './types';

const useConnect = () => {
  const { list } = useFlatListToTop();

  const [items, setItems] = useState(NOTIFICATIONS);

  const safeBottom = useTabScreenBottomSpacing();

  const keyExtractor = useCallback((item: Item) => item.id, []);

  const handlePressClose = useCallback((id: string) => {
    setItems((its) => its.slice().filter((it) => it.id !== id));
  }, []);

  return {
    list,
    items,
    safeBottom,
    keyExtractor,
    handlePressClose,
  };
};

export default useConnect;
