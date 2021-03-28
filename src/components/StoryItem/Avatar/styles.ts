import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { PhotoProps } from './types';

export const Container = styled.View``;

// eslint-disable-next-line import/prefer-default-export
export const Photo = styled(FastImage)<PhotoProps>`
  position: ${({ hasStories }) => (hasStories ? 'absolute' : 'relative')};
  width: ${({ size }) => size - 4}px;
  height: ${({ size }) => size - 4}px;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: ${({ hasStories }) => (hasStories ? 2 : 0)}px;
  border-radius: ${({ size }) => size / 2}px;
  transform: translateX(2px) translateY(2px);
  z-index: 2;
`;
