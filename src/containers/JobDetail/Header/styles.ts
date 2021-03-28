import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.device.safeTop + 17}px 35px 6px 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const SecText = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray0};
  margin-top: 5px;
`;
