import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

export const Container = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`);

export const Main = styled.View`
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: ${({ theme }) => theme.device.safeBottom + 9}px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 13px 9px;
  z-index: 555;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#fafafa00', '#FAFAFA'],
  pointerEvents: 'none',
})`
  width: 100%;
  height: 137px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;
