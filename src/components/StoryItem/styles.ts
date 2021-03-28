import styled from 'styled-components/native';
import BaseText from 'components/Text';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  align-items: center;
`;

export const Username = styled(BaseText)`
  font-size: 12px;
  color: #111;
  margin-top: 6px;
`;
