import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 7px;
  height: 7px;
  justify-content: center;
  align-items: center;
`;

export const Circle = Animated.createAnimatedComponent(styled.View`
  width: 5px;
  height: 5px;
  border-radius: 4px;
  background-color: #d1d1d1;
`);
