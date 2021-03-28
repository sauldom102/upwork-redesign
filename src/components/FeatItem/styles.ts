import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled.View`
  width: 50%;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 10px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Subtitle = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray1};
  text-transform: uppercase;
  margin-top: 4px;
`;
