import styled from 'styled-components/native';
import { Text } from 'components';
import BaseLoader from '../Loader';

export const Container = styled.View`
  position: absolute;
  top: 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const Loader = styled(BaseLoader)`
  width: 20px;
  position: absolute;
`;

export const Title = styled(Text)`
  color: #bbb;
  font-size: 12px;
  margin-left: 28px;
`;
