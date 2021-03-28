import styled from 'styled-components/native';
import { Text, FeatBadge } from 'components';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 17px 20px 20px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Body = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 11px;
`;

export const Badge = styled(FeatBadge).attrs(({ theme }) => ({
  titleStyle: {
    color: theme.colors.primary,
  },
}))`
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #f1f9ed;
`;
