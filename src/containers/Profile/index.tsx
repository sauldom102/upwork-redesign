import React, { FC, useMemo, useCallback } from 'react';
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import { StatusBar } from 'components';
import { colors } from 'theme';
import { Props } from './types';
import {
  Container,
  Body,
  TabContainer,
  SegmentedControl,
  Cards,
  Availability,
  DataCard,
} from './styles';
import { ROUTES } from './constants';
import Header from './Header';
import MainInfo from './MainInfo';
import ScreenHeader from './ScreenHeader';
import useConnect from './connect';

const Profile: FC<Props> = () => {
  const {
    list,
    safeBottom,
    index,
    setIndex,
    headerHeight,
    setHeaderHeight,
    scroll,
    scrollHandler,
    handlePressMenuItem,
  } = useConnect();

  const renderTabBar = useCallback(
    (
      p: SceneRendererProps & {
        navigationState: NavigationState<Route>;
      },
    ) => (
      <TabContainer>
        <SegmentedControl
          routes={p.navigationState.routes}
          activeIndex={p.navigationState.index}
          onPressTab={p.jumpTo}
          tintColor={colors.primary}
        />
      </TabContainer>
    ),
    [],
  );

  const firstScene = useCallback(() => null, []);

  const renderScene = useMemo(
    () =>
      SceneMap({
        general: firstScene,
        'product-design': firstScene,
        'mobile-ux-design': firstScene,
      }),
    [firstScene],
  );

  return (
    <Container>
      <StatusBar light />
      <Body
        ref={list}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        headerHeight={headerHeight}
        safeBottom={safeBottom}
      >
        <Header
          fullName="Saul Dominguez"
          jobSuccess={0.76}
          location="Seville, Spain"
          onPressMenuItem={handlePressMenuItem}
          premium
          verified
        />
        <TabView
          navigationState={{ index, routes: ROUTES }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
        <Cards>
          <MainInfo />
          <Availability />
          <DataCard
            title="Verifications"
            data={[
              {
                title: 'Phone number',
                verified: true,
                withVerifiedText: true,
              },
            ]}
          />
          <DataCard
            title="Languages"
            data={[
              {
                title: 'English:',
                subtitle: 'Fluent',
                verified: true,
              },
              {
                title: 'Russian:',
                subtitle: 'Native or Bilingual',
                verified: true,
              },
              {
                title: 'Spanish:',
                subtitle: 'Native or Bilingual',
                verified: true,
              },
              {
                title: 'German:',
                subtitle: 'Basic',
              },
            ]}
          />
        </Cards>
      </Body>
      <ScreenHeader
        scroll={scroll}
        earnings={3289}
        onHeight={setHeaderHeight}
      />
    </Container>
  );
};

export default Profile;
