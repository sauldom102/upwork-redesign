import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Text } from 'components';
import { FirstProps } from './types';
import BaseQuestion from './Question';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.ScrollView``;

export const Top = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 35px 20px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  color: #c4c4c4;
  margin-top: 8px;
`;

export const Cards = styled(ScrollView).attrs(({ theme }) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  contentContainerStyle: {
    padding: 16,
  },
  snapToInterval: theme.device.width,
  decelerationRate: 'fast',
}))`
  background-color: #fafafa;
`;

export const cardStyle = css<FirstProps>`
  width: ${({ theme }) => theme.device.width - 30}px;
  padding: 17px 21px 20px 19px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ first = false }) => (first ? 0 : 30)}px;
`;

export const Card = styled.View<FirstProps>`
  ${cardStyle}
`;

export const Question = styled(BaseQuestion)<FirstProps>`
  margin-top: ${({ first = false }) => (first ? 0 : 17)}px;
`;
