import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from 'theme/provider';
import Navigator from 'navigator';
import { BlurWall } from 'components';
import { navigationStyles } from './styles';
import { Props } from './types';
import useConnect from './connect';

const Root: FC<Props> = () => {
  const { handleReady } = useConnect();

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer theme={navigationStyles} onReady={handleReady}>
            <Navigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
      <BlurWall />
    </>
  );
};

export default Root;
