import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getSizeValue } from './utils';
import { MainProps } from './types';

export const Container = styled(BorderlessButton)``;

export const Main = styled.View<MainProps>`
  justify-content: center;
  align-items: center;
  width: ${({ size }) => getSizeValue(size)}px;
  height: ${({ size }) => getSizeValue(size)}px;
  border-radius: ${({ size }) => getSizeValue(size) / 2}px;
  background-color: ${({ color }) => color};
`;
