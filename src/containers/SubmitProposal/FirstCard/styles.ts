import styled from 'styled-components/native';
import { Text } from 'components';
import BaseHourlyProtection from '../HourlyProtection';
import BaseStepper from '../Stepper';
import BaseFeeCard from '../FeeCard';
import { cardStyle } from '../styles';
import { CardProps } from './types';

export const Container = styled.View<CardProps>`
  ${cardStyle}
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray0};
  text-align: center;
`;

export const HourlyTitle = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray0};
  text-align: center;
  margin-top: 21px;
`;

export const HourlySubtitle = styled(HourlyTitle).attrs({
  family: 'Rubik-Regular',
})`
  color: #c4c4c4;
  margin-top: 3px;
`;

export const HourlyProtection = styled(BaseHourlyProtection)`
  margin-top: 15px;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 12px;
`;

export const FeeCard = styled(BaseFeeCard)`
  margin-top: 20px;
`;
