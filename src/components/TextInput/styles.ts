import styled, { css } from 'styled-components/native';
import { TextInput, View } from 'react-native';
import { InputContainerProps, InputProps } from './types';

export const Container = styled(View)``;

const focusedContainerStyles = css`
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
`;

export const LeftIcons = styled.View`
  margin-left: 15px;
`;

export const InputContainer = styled(View)<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid #f0f0f0;
  border-radius: 10px;
  ${({ focused }) => focused && focusedContainerStyles};
`;

export const RightIcons = styled.View`
  margin-right: 15px;
`;

export const Input = styled(TextInput).attrs<InputProps>(({ theme }) => ({
  placeholderTextColor: theme.colors.gray1,
}))<InputProps>`
  flex: 1;
  height: ${({ multiline }) => (multiline ? 150 : 46)}px;
  padding: ${({ withIcons }) => (withIcons ? 10 : 14)}px;
  color: ${({ theme }) => theme.colors.gray0};
  font-size: 12px;
  font-family: Rubik-Regular;
`;
