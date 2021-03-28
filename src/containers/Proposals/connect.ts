import { useState } from 'react';
import { ITEMS } from './constants';

const useConnect = () => {
  const [index, setIndex] = useState(0);
  const [items] = useState(ITEMS);

  return {
    index,
    setIndex,
    items,
  };
};

export default useConnect;
