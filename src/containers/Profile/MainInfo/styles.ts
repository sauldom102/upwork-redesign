import styled from 'styled-components/native';
import { Button, Text, FeatItem as BaseFeatItem } from 'components';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 13px 20px 20px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Description = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #c4c4c4;
  margin-top: 8px;
`;

export const PlayButton = styled(Button).attrs({
  mainStyle: {
    height: 35,
  },
})`
  margin-top: 15px;
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
