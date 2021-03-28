import React, { FC, memo, useCallback } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import MenuItem from 'components/MenuItem';
import { useRealTimeData } from 'utils';
import { Container, Main, Gradient } from './styles';
import { Props } from './types';

const NOTIFICATIONS_COUNT = 2;

const TabBarBottom: FC<Props> = ({ navigation: { navigate, emit }, state }) => {
  const collapse = useRealTimeData('collapseTabBar');

  const handlePressTabItem = useCallback(
    ({ routeName, routeKey, isFocused }) => {
      navigate(routeName);
      if (isFocused) {
        emit({
          type: 'tabPress',
          target: routeKey,
          canPreventDefault: true,
        });
      }
    },
    [navigate, emit],
  );

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(collapse ? 200 : 0),
      },
    ],
  }));

  return (
    <Container style={containerStyle}>
      <Gradient />
      <Main>
        {state.routes.map((route, i) => (
          <MenuItem
            key={route.key}
            isFocused={i === state.index}
            routeName={route.name}
            routeKey={route.key}
            badge={route.name === 'Messages' ? NOTIFICATIONS_COUNT : 0}
            onPress={handlePressTabItem}
          />
        ))}
      </Main>
    </Container>
  );
};

export default memo(TabBarBottom);
