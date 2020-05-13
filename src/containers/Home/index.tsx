import React, { FC } from 'react';
import { Container, Text } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  return (
    <Container>
      <Text>Home screen</Text>
    </Container>
  );
};

export default Home;
