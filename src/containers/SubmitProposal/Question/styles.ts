import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text, FormTextInput } from 'components';
import { TitleProps, InputProps } from './types';

export const Container = styled(View)``;

export const Title = styled(Text).attrs<TitleProps>(() => ({
  family: 'Rubik-Bold',
}))<TitleProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
  text-align: ${({ centered }) => (centered ? 'center' : 'auto')};
`;

export const Input = styled(FormTextInput).attrs<InputProps>(
  ({ biggerInput }) => ({
    inputStyle: {
      height: biggerInput ? 180 : 150,
    },
  }),
)<InputProps>`
  margin-top: 9px;
`;
