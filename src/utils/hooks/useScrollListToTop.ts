import { useCallback, useRef } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

export const useScrollListToTop = () => {
  const list = useRef<ScrollView>(null);

  const scrollToTop = useCallback(() => {
    list.current?.scrollTo({
      y: 0,
    });
  }, []);

  useScrollToTop(
    useRef({
      scrollToTop,
    }),
  );

  return list;
};

export const useFlatListToTop = () => {
  const list = useRef<FlatList>(null);

  const scrollToTop = useCallback(() => {
    list.current?.scrollToOffset({
      offset: 0,
    });
  }, []);

  useScrollToTop(
    useRef({
      scrollToTop,
    }),
  );

  return { list, scrollToTop };
};
