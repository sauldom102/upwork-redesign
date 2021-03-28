import React, { FC, memo, useEffect, useCallback } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useLayout } from '@react-native-community/hooks';
import { useCustomForm, useRealTimeData } from 'utils';
import { Props } from './types';
import { Container, Input, IconButton } from './styles';

const Header: FC<Props> = ({
  onPressFaveButton,
  faveButtonActive = false,
  onHeight,
  collapseEnabled = true,
}) => {
  const { onLayout, height } = useLayout();

  const handleSubmit = useCallback(() => {}, []);

  const { control } = useCustomForm({
    defaultValues: {
      search: '',
    },
    onSubmit: handleSubmit,
  });

  const collapse = useRealTimeData('collapseTabBar');

  const containerStyle = useAnimatedStyle(() => ({
    marginTop: collapseEnabled ? withTiming(collapse ? -height : 0) : 0,
  }));

  useEffect(() => {
    if (onHeight) {
      onHeight(height);
    }
  }, [onHeight, height]);

  return (
    <Container onLayout={onLayout} style={containerStyle}>
      <Input
        name="search"
        control={control}
        placeholder="Search for Jobs"
        leftIcon="search"
        rightIcon="filter"
      />
      <IconButton
        type="fave"
        size="xl"
        onPress={onPressFaveButton}
        active={faveButtonActive}
      />
    </Container>
  );
};

export default memo(Header);
