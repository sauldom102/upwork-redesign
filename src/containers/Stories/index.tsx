import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Story from './Story';
import { Props, RenderItemProps } from './types';
import { Container, Overlay, List } from './styles';
import useConnect from './connect';

const Stories: FC<Props> = () => {
  const {
    scroll,
    currentIndex,
    stories,
    handleFinishUserStory,
    handleGetItemLayout,
    scrollHandler,
    animatedStyle,
    gestureHandler,
    overlayAnimatedStyle,
  } = useConnect();

  const handleRenderItem = useCallback(
    ({ item, index }: RenderItemProps) => (
      <Story
        index={index}
        media={item.media}
        userPhoto={item.userPhoto}
        username={item.username}
        onFinish={handleFinishUserStory}
        active={index === currentIndex}
      />
    ),
    [currentIndex, handleFinishUserStory],
  );

  return (
    <>
      <Overlay style={overlayAnimatedStyle} />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Container style={animatedStyle}>
          <StatusBar light />
          <List
            ref={scroll}
            data={stories}
            renderItem={handleRenderItem}
            showsHorizontalScrollIndicator={false}
            getItemLayout={handleGetItemLayout}
            scrollEventThrottle={16}
            decelerationRate="fast"
            onScroll={scrollHandler}
            disableIntervalMomentum
            horizontal
          />
        </Container>
      </PanGestureHandler>
    </>
  );
};

export default Stories;
