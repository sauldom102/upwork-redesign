import React, { FC, useCallback, useMemo } from 'react';
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import { TabScreenHeader, StatusBar } from 'components';
import { Props } from './types';
import { Container, SegmentedControl, Body, Item } from './styles';
import { ROUTES } from './constants';
import useConnect from './connect';

const Proposals: FC<Props> = () => {
  const { index, setIndex, items } = useConnect();

  const handleRenderTabBar = useCallback(
    (
      p: SceneRendererProps & {
        navigationState: NavigationState<Route>;
      },
    ) => (
      <SegmentedControl
        routes={p.navigationState.routes}
        activeIndex={p.navigationState.index}
        onPressTab={p.jumpTo}
      />
    ),
    [],
  );

  const Active = useCallback(
    () => (
      <Body>
        {items.map((it) => (
          <Item key={it.id} id={it.id} title={it.title} amount={it.amount} />
        ))}
      </Body>
    ),
    [items],
  );

  const Archived = useCallback(
    () => (
      <Body>
        {items.map((it) => (
          <Item key={it.id} id={it.id} title={it.title} amount={it.amount} />
        ))}
      </Body>
    ),
    [items],
  );

  const renderScene = useMemo(
    () =>
      SceneMap({
        active: Active,
        archived: Archived,
      }),
    [Active, Archived],
  );

  return (
    <Container>
      <StatusBar />
      <TabScreenHeader title="Proposals" />
      <TabView
        navigationState={{ index, routes: ROUTES }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={handleRenderTabBar}
      />
    </Container>
  );
};

export default Proposals;
