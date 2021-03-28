import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { TextButton } from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const Body = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  alwaysBounceVertical: false,
})``;

export const Illustration = styled(FastImage).attrs({
  resizeMode: 'contain',
})`
  width: 220px;
  aspect-ratio: 1;
  align-self: center;
  margin-bottom: 24px;
`;

export const BottomButton = styled(TextButton)`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: ${({ theme }) => theme.device.safeBottom + 16}px;
`;
