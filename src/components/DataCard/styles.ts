import styled from 'styled-components/native';
import Text from 'components/Text';
import BaseItem from './Item';

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

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

export const Body = styled.View`
  margin-top: 3px;
`;

export const Item = styled(BaseItem)`
  margin-top: 11px;
`;
