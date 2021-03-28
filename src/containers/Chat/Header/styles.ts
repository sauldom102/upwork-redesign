import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-color: #f4f4f4;
  border-bottom-width: 1px;
`;

export const Body = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const Names = styled.View`
  flex-direction: row;
`;

export const FullName = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Username = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const Status = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2px;
`;
