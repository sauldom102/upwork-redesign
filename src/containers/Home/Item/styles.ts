import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {
  FeatBadge,
  Text,
  IconButton as BaseIconButton,
  VerifiedBadge,
} from 'components';
import { BodyProps } from './types';

export const Container = Animated.createAnimatedComponent(styled(RectButton)`
  border-radius: 10px;
`);

export const Main = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
`;

export const Body = styled.View<BodyProps>`
  padding: ${({ featured }) => (featured ? 9 : 20)}px 20px 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeft = styled.View``;

export const TopRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled(BaseIconButton)`
  margin-left: 5px;
`;

export const Subtitle = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Feats = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-top: 10px;
`;

export const Feat = styled(FeatBadge)`
  margin-right: 5px;
`;

export const Description = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #c4c4c4;
  margin-top: 8px;
`;

export const Verified = styled(VerifiedBadge)`
  margin-right: 5px;
`;
