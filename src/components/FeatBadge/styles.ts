import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled.View`
  padding: 4px 9px 3px;
  background-color: #fafafa;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 11px;
  color: #4a4a4a;
`;

export const Subtitle = styled(Title).attrs({
  family: 'Rubik-Medium',
})`
  color: #d1d1d1;
`;
