import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: #d1d1d1;
  margin-left: 3px;
`;
