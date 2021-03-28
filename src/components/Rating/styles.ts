import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray0};
  margin-left: 5px;
`;
