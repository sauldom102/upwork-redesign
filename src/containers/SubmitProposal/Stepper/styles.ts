import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text } from 'components';
import { SizeProps, SideTextProps } from './types';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.View<SizeProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #f0f0f0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  margin: 0 ${({ size }) => (size === 'm' ? 14 : 5)}px;
`;

export const Value = styled(Text).attrs<SizeProps>(() => ({
  family: 'Rubik-Medium',
}))<SizeProps>`
  width: ${({ size }) => (size === 'm' ? 105 : 65)}px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const SideText = styled(Text).attrs<SideTextProps>(() => ({
  family: 'Rubik-Medium',
}))<SideTextProps>`
  font-size: 14px;
  color: ${({ active, theme }) => (active ? theme.colors.primary : '#C4C4C4')};
`;
