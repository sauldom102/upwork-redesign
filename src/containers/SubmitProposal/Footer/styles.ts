import styled from 'styled-components/native';
import BaseButton from 'components/Button';

export const Container = styled.View`
  margin-top: auto;
`;

export const Bottom = styled.View`
  margin-top: auto;
  padding: 20px 35px ${({ theme }) => 16 + theme.device.safeBottom}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled(BaseButton)`
  margin-top: 19px;
`;
