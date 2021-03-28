import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'components';

export const Container = styled(RectButton)`
  width: 100%;
  border-radius: 10px;
`;

export const Main = styled.View`
  padding: 11px 11px 7px;
  border-radius: 10px;
  background-color: #fafafa;
  align-items: center;
  z-index: -1;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 10px;
  color: #c4c4c4;
  text-align: center;
`;

export const Bolded = styled(Title).attrs({
  family: 'Rubik-Bold',
})`
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Subtitle = styled(Title)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 3px;
`;
