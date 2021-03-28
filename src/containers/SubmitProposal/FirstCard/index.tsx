import React, { FC, memo } from 'react';
import { Props } from './types';
import {
  Container,
  Title,
  HourlyTitle,
  HourlySubtitle,
  HourlyProtection,
  Stepper,
  FeeCard,
} from './styles';

const FirstCard: FC<Props> = ({ control }) => (
  <Container first>
    <Title>What is Your Rate For This Job?</Title>
    <HourlyProtection />
    <HourlyTitle>Hourly Rate</HourlyTitle>
    <HourlySubtitle>
      Total amount the client will see on your proposal
    </HourlySubtitle>
    <Stepper name="hourlyRate" control={control} />
    <FeeCard />
  </Container>
);

export default memo(FirstCard);
