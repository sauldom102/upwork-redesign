import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { SUPPORT_URL } from 'config';
import {
  useTabScreenBottomSpacing,
  useScrollListToTop,
  openWebLink,
} from 'utils';
import { Props } from './types';

const useConnect = () => {
  const list = useScrollListToTop();

  const safeBottom = useTabScreenBottomSpacing();

  const { navigate } = useNavigation<Props['navigation']>();

  const [index, setIndex] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const scroll = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    scroll.value = y;
  });

  const handlePressMenuItem = useCallback(
    ({ routeName }) => {
      if (routeName === 'Support') {
        openWebLink(SUPPORT_URL);
      }
      if (routeName === 'Settings') {
        navigate('Settings');
      }
    },
    [navigate],
  );

  return {
    list,
    safeBottom,
    index,
    setIndex,
    headerHeight,
    setHeaderHeight,
    scroll,
    scrollHandler,
    handlePressMenuItem,
  };
};

export default useConnect;
