import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'components';

export const Container = styled(RectButton)`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  padding-right: 20px;
`;

export const Icon = styled.View`
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: #fafafa;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray0};
  margin-left: 4px;
`;

export const Amount = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
