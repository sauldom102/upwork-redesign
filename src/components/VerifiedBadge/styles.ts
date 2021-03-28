import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled.View`
  padding-left: 4px;
  padding-right: 9px;
  background-color: ${({ theme }) => theme.colors.pictonBlue};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: 20px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 11px;
  color: #fff;
  margin-left: 4px;
`;
