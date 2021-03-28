import { useCallback, useState, useMemo } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { JOB_OFFERS } from 'models/JobOffer/mock';
import {
  getLikedJobOffers,
  toggleJobOfferLike,
  useTabScreenBottomSpacing,
  useFlatListToTop,
  realTimeData,
} from 'utils';
import {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Item, Props } from './types';

const useConnect = () => {
  const safeBottom = useTabScreenBottomSpacing();

  const { list, scrollToTop } = useFlatListToTop();

  const accScroll = useSharedValue(0);

  const [offerLikes, setOfferLikes] = useState<string[]>([]);

  const updateFaves = useCallback(async () => {
    setOfferLikes(await getLikedJobOffers());
  }, []);

  const handleFocus = useCallback(() => {
    realTimeData.setData({
      collapseTabBar: false,
    });

    updateFaves();

    return () => {
      realTimeData.setData({
        collapseTabBar: false,
      });
    };
  }, [updateFaves]);

  useFocusEffect(handleFocus);

  const [items, setItems] = useState(JOB_OFFERS);
  const [justFaves, setJustFaves] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);

  const handlePressHeaderFave = useCallback(() => {
    scrollToTop();
    setTimeout(() => {
      setJustFaves((f) => !f);
    }, 250);
  }, [scrollToTop]);

  const setShouldCollapseTabBar = useCallback(
    (should = false, scroll = 0) => {
      accScroll.value = scroll;
      realTimeData.setData({
        collapseTabBar: should,
      });
    },
    [accScroll],
  );

  const scrollHandler = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    if (y < accScroll.value - 200) {
      runOnJS(setShouldCollapseTabBar)(false, y);
    } else if (y > accScroll.value + 200) {
      runOnJS(setShouldCollapseTabBar)(true, y);
    }
  });

  const { navigate } = useNavigation<Props['navigation']>();

  const keyExtractor = useCallback((item: Item) => item.id, []);

  const handlePressItem = useCallback(
    (id: string) => {
      navigate('JobDetail', {
        id,
      });
    },
    [navigate],
  );

  const handlePressItemFave = useCallback(async (id: string) => {
    const newOfferLikes = await toggleJobOfferLike(id);
    setOfferLikes(newOfferLikes);
  }, []);

  const handlePressClose = useCallback((id: string) => {
    setItems((its) => its.slice().filter((it) => it.id !== id));
  }, []);

  const finalItems = useMemo(
    () =>
      justFaves ? items.filter((it) => offerLikes.includes(it.id)) : items,
    [justFaves, items, offerLikes],
  );

  return {
    safeBottom,
    list,
    scrollHandler,
    headerHeight,
    setHeaderHeight,
    keyExtractor,
    items: finalItems,
    handlePressItem,
    handlePressItemFave,
    offerLikes,
    handlePressClose,
    justFaves,
    handlePressHeaderFave,
  };
};

export default useConnect;
