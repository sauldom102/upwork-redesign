import styled from 'styled-components/native';
import BaseText from 'components/Text';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  transform: translateX(-4px);
  padding: 4px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(BaseText).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 15px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.gray0};
  text-align: center;
`;
