import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray0};
  margin-left: 4px;
  margin-right: 5px;
`;
