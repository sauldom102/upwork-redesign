import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.View`
  margin-top: auto;
  padding: 20px 35px ${({ theme }) => 9 + theme.device.safeBottom}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
