import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  margin-right: 2px;
  height: 2px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Progress = Animated.createAnimatedComponent(styled.View`
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #fff;
`);
