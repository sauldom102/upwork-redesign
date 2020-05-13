import React, { FC, useEffect, useState } from 'react';
import StatusBar from 'components/StatusBar';
import theme from 'theme';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setupApollo } from 'apollo';
import Navigator from 'navigator';
import { Props } from './types';

const Root: FC<Props> = () => {
  const [apolloClient, setApolloClient] = useState<
    ApolloClient<NormalizedCacheObject>
  >();

  useEffect(() => {
    setupApollo().then((client) => {
      setApolloClient(client);
    });
  }, []);

  if (!apolloClient) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Root;
