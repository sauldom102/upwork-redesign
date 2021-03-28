import { useCallback, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { runOnJS, useAnimatedScrollHandler } from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import { device } from 'theme';
import { Props, Item } from './types';
import useLogic from './logic';

const { width } = device;

const useConnect = () => {
  const scroll = useRef<FlatList<Item>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { stories },
  } = useRoute<Props['route']>();

  const storiesCount = stories.length;

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const { animatedStyle, gestureHandler, overlayAnimatedStyle } = useLogic({
    goBack: handleGoBack,
  });

  const handleFinishUserStory = useCallback(
    (storyIndex: number) => {
      const newIndex = storyIndex + 1;
      if (newIndex < storiesCount) {
        const scrollNode = scroll.current;
        if (scrollNode) {
          setCurrentIndex(() => {
            scrollNode.scrollToOffset({
              offset: width * newIndex,
              animated: true,
            });
            return newIndex;
          });
        }
      } else {
        handleGoBack();
      }
    },
    [storiesCount, handleGoBack],
  );

  const handleGetItemLayout = useCallback(
    (_, index) => ({
      length: width,
      offset: width * index,
      index,
    }),
    [],
  );

  const scrollHandler = useAnimatedScrollHandler({
    onMomentumEnd: ({
      contentOffset: { x: contentOffsetX },
      layoutMeasurement: { width: w },
    }) => {
      runOnJS(setCurrentIndex)(Math.floor(contentOffsetX / w));
    },
  });

  return {
    scroll,
    currentIndex,
    stories,
    handleFinishUserStory,
    handleGetItemLayout,
    scrollHandler,
    animatedStyle,
    gestureHandler,
    overlayAnimatedStyle,
  };
};

export default useConnect;
