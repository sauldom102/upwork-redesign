import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  align-self: flex-start;
  border-bottom-right-radius: 10px;
  padding: 6px 20px 5px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 4px;
`;
