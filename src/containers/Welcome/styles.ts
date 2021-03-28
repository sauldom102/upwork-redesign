import styled from 'styled-components/native';
import { Button as BaseButton, Text } from 'components';
import { LogoIcon } from 'components/Icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 0 15px;
`;

export const Body = styled.View``;

export const Logo = styled(LogoIcon)`
  align-self: center;
  margin-bottom: 104px;
`;

export const Button = styled(BaseButton)`
  margin-top: 15px;
`;

export const Or = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
  align-self: center;
`;
