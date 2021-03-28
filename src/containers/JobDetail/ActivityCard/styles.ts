import styled from 'styled-components/native';
import { FeatItem as BaseFeatItem, Text } from 'components';

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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FeatItem = styled(BaseFeatItem)`
  width: ${({ theme }) => (theme.device.width - 85) / 2}px;
  margin-top: 15px;
`;
