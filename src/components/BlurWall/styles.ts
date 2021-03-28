import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import { absoluteFill } from 'theme/snippets';

// eslint-disable-next-line import/prefer-default-export
export const Wall = Animated.createAnimatedComponent(styled(BlurView).attrs({
  blurType: 'light',
  blurAmount: 20,
  reducedTransparencyFallbackColor: 'white',
})`
  ${absoluteFill};
`);
