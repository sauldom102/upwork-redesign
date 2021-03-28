import styled from 'styled-components/native';
import { Text } from 'components';
import BaseStepper from '../../Stepper';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 26px 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Left = styled.View`
  flex: 1;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled(Text)`
  font-size: 10px;
  color: #caf9ae;
  margin-top: 2px;
`;

export const Stepper = styled(BaseStepper)``;
