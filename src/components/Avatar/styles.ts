import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { ContainerProps, ImageProps } from './types';

export const Container = styled.View<ContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(FastImage)<ImageProps>`
  width: ${({ size, reduction = 0 }) => size - reduction}px;
  height: ${({ size, reduction = 0 }) => size - reduction}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: rgba(91, 192, 235, 0.15);
  border-width: ${({ border = 0 }) => border}px;
  border-color: transparent;
`;
