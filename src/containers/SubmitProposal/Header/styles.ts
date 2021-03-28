import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text } from 'components';
import { RemoveIcon } from 'components/Icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.device.safeTop + 21}px 11px 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled(BorderlessButton)``;

export const CloseIcon = styled(RemoveIcon).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.primary,
}))``;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray0};
  margin-left: 4px;
`;
