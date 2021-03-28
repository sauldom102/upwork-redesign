import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import { Text } from 'components';
import { ContainerProps, LastMessageProps } from './types';

const unreadContainer = css`
  background-color: #f1f9ed;
  box-shadow: 0 1px 4px rgba(27, 83, 6, 0.15);
`;

export const Container = styled(RectButton)<ContainerProps>`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ unread }) => unread && unreadContainer};
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  border-radius: 15px;
  z-index: -1;
`;

export const PhotoContainer = styled.View``;

export const Photo = styled(FastImage)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Body = styled.View`
  flex: 1;
  margin-left: 9px;
`;

export const FullName = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Role = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 11px;
  color: #6fdb45;
  margin-top: 1px;
`;

export const LastMessage = styled(Text)<LastMessageProps>`
  font-size: 11px;
  color: ${({ theme, unread }) =>
    unread ? theme.colors.gray0 : theme.colors.gray1};
  margin-top: 2px;
`;

export const Right = styled.View``;

export const Time = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const BadgeMain = styled.View`
  padding: 5.5px 9px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 25px;
  align-self: flex-end;
  margin-top: 5px;
`;

export const BadgeText = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;
