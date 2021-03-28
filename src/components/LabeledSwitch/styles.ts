import styled from 'styled-components/native';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Text from 'components/Text';

export const Container = styled(RectButton)``;

export const Main = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const Label = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
`;
