import styled from 'styled-components/native';
import BaseFullName from './FullName';
import BaseLocation from './Location';

export const Container = styled.View`
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FullName = styled(BaseFullName)`
  margin-top: 8px;
`;

export const Location = styled(BaseLocation)`
  margin-top: 6px;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 23px;
`;
