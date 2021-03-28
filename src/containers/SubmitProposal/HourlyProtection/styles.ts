import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'components';

export const Container = styled(RectButton)`
  width: 100%;
  border-radius: 100px;
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px;
  border-radius: 100px;
  background-color: #f1f9ed;
  z-index: -1;
`;

export const Icon = styled.View`
  width: 41px;
  height: 41px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Subtitle = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
`;
