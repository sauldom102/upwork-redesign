import React, {
  FC,
  useState,
  useMemo,
  useEffect,
  useCallback,
  memo,
  useRef,
} from 'react';
import Avatar from 'components/StoryItem/Avatar';
import MediaIndicator from 'components/MediaIndicator';
import BaseVideo, { OnLoadData } from 'react-native-video';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Container,
  Photo,
  Header,
  HeaderBody,
  UserUsername,
  MediaCount,
  Video,
} from './styles';
import { Props } from './types';
import FullscreenButtons from './FullscreenButtons';

const Story: FC<Props> = ({
  index,
  media,
  userPhoto,
  username,
  onFinish,
  active = false,
}) => {
  const videoRef = useRef<BaseVideo>(null);

  const [paused, setPaused] = useState(false);
  const mediaPaused = useSharedValue(false);
  const headerShown = useSharedValue(true);

  const [videoDuration, setVideoDuration] = useState(10000);

  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const headerStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(headerShown.value ? 1 : 0),
    }),
    [],
  );

  const currentMedia =
    media[Math.max(0, Math.min(currentMediaIndex, media.length - 1))];

  const mediaLength = media.length;

  const currentMediaType = currentMedia.type;
  const currentVideoSkip = currentMedia.skip || 0;
  const currentMediaDuration = currentMedia.duration;
  const currentDuration = useMemo(() => {
    if (currentMediaDuration) {
      return currentMediaDuration;
    }

    if (currentMediaType === 'video') {
      return videoDuration;
    }

    return 1000;
  }, [currentMediaDuration, currentMediaType, videoDuration]);

  const durationLeft = useRef(currentDuration);
  const pausedAt = useRef(0);

  const shouldFinish = currentMediaIndex >= mediaLength && active;
  useEffect(() => {
    if (shouldFinish && onFinish) {
      onFinish(index);
    }
  }, [shouldFinish, onFinish, index]);

  const resetTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const handlePressLeft = useCallback(() => {
    setCurrentMediaIndex((cmi) => Math.max(0, cmi - 1));
  }, []);

  const handlePressRight = useCallback(() => {
    setCurrentMediaIndex((cmi) => cmi + 1);
  }, []);

  const handleHold = useCallback(() => {
    resetTimeout();
    durationLeft.current -= Date.now() - pausedAt.current;
    setPaused(true);
    mediaPaused.value = true;
    headerShown.value = false;
  }, [resetTimeout, mediaPaused, headerShown]);

  const handleRelease = useCallback(() => {
    timeout.current = setTimeout(handlePressRight, durationLeft.current);
    pausedAt.current = Date.now();
    durationLeft.current = currentDuration;
    mediaPaused.value = false;
    headerShown.value = true;
    setPaused(false);
  }, [handlePressRight, mediaPaused, headerShown, currentDuration]);

  const handleMediaLoad = useCallback(() => {
    handleRelease();
  }, [handleRelease]);

  const handleVideoLoaded = useCallback(
    ({ duration }: OnLoadData) => {
      videoRef.current?.seek(currentVideoSkip);
      setVideoDuration(duration * 1000);
      handleMediaLoad();
    },
    [handleMediaLoad, currentVideoSkip],
  );

  const handleImageLoad = useCallback(() => {
    handleMediaLoad();
  }, [handleMediaLoad]);

  useEffect(() => {
    if (active && currentMediaIndex < mediaLength && currentMediaIndex >= 0) {
      resetTimeout();
      mediaPaused.value = true;
      return resetTimeout;
    }
    if (!active) {
      setTimeout(() => {
        setCurrentMediaIndex(0);
      }, 500);
    }
    return () => {};
  }, [active, mediaLength, currentMediaIndex, resetTimeout, mediaPaused]);

  const handleVideoLoadStart = useCallback(() => {
    setPaused(true);
  }, []);

  return (
    <Container>
      <Header style={headerStyle}>
        <MediaCount>
          {media.map((m, i) => (
            <MediaIndicator
              key={m.id}
              duration={
                currentMediaIndex === i ? currentDuration : m.duration || 1000
              }
              index={i}
              current={currentMediaIndex}
              enabled={active}
              paused={mediaPaused}
            />
          ))}
        </MediaCount>
        <HeaderBody>
          <Avatar photo={userPhoto ?? ''} size={42} hasStories={false} />
          <UserUsername>{`@${username}`}</UserUsername>
        </HeaderBody>
      </Header>
      {currentMediaType === 'photo' && (
        <Photo
          source={{
            uri: currentMedia.url,
          }}
          onLoad={handleImageLoad}
        />
      )}
      {currentMediaType === 'video' && (
        <Video
          ref={videoRef}
          paused={!active || paused}
          source={{
            uri: currentMedia.url,
          }}
          onLoadStart={handleVideoLoadStart}
          onLoad={handleVideoLoaded}
          resizeMode="contain"
        />
      )}
      {active && (
        <FullscreenButtons
          onPressLeft={handlePressLeft}
          onPressRight={handlePressRight}
          onHold={handleHold}
          onRelease={handleRelease}
        />
      )}
    </Container>
  );
};

export default memo(Story);
