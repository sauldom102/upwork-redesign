import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import BaseText from 'components/Text';
import BaseVideo from 'react-native-video';

export const Container = styled.View`
  width: ${({ theme }) => theme.device.width}px;
  height: ${({ theme }) => theme.device.height}px;
  padding-top: ${({ theme }) => theme.device.safeTop + 2}px;
`;

const absoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Photo = styled.Image`
  ${absoluteFill}
`;

export const Video = styled(BaseVideo)`
  ${absoluteFill}
`;

export const Header = Animated.createAnimatedComponent(styled.View`
  z-index: 4;
`);

export const HeaderBody = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;

export const UserUsername = styled(BaseText).attrs({
  weight: 600,
})`
  margin-left: 8px;
  font-size: 14px;
  color: #fff;
`;

export const MediaCount = styled.View`
  margin: 6px 8px 0 8px;
  flex-direction: row;
  justify-content: space-between;
`;
