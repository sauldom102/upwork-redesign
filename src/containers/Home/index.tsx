import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import { Container, List, Separator, Footer } from './styles';
import { Props, RenderItemProps } from './types';
import Header from './Header';
import Item from './Item';
import useConnect from './connect';

const Home: FC<Props> = () => {
  const {
    safeBottom,
    list,
    scrollHandler,
    headerHeight,
    setHeaderHeight,
    keyExtractor,
    items,
    handlePressItem,
    handlePressItemFave,
    offerLikes,
    handlePressClose,
    justFaves,
    handlePressHeaderFave,
  } = useConnect();

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <Item
        id={item.id}
        title={item.title}
        description={item.description}
        featured={item.featured}
        paymentVerified={item.paymentVerified}
        fave={offerLikes.includes(item.id)}
        onPress={handlePressItem}
        onPressFave={handlePressItemFave}
        onPressClose={handlePressClose}
      />
    ),
    [handlePressItem, handlePressItemFave, offerLikes, handlePressClose],
  );

  const handleRenderFooter = useCallback(
    () => <Footer safeBottom={safeBottom} />,
    [safeBottom],
  );

  return (
    <Container>
      <StatusBar />
      <List
        ref={list}
        onScroll={scrollHandler}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={handleRenderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={handleRenderFooter}
        scrollEventThrottle={16}
        headerHeight={headerHeight}
      />
      <Header
        onPressFaveButton={handlePressHeaderFave}
        faveButtonActive={justFaves}
        onHeight={setHeaderHeight}
      />
    </Container>
  );
};

export default Home;
