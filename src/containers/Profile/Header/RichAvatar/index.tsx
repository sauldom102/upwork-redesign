import React, { FC, memo } from 'react';
import { percentage } from 'utils';
import { Props } from './types';
import {
  Container,
  Progress,
  Avatar,
  BottomCard,
  Percentage,
  Success,
} from './styles';

const RichAvatar: FC<Props> = ({ progress }) => (
  <Container>
    <Progress
      progress={progress}
      startAngle={0.15 * Math.PI}
      endAngle={Math.PI * 1.85}
    />
    <Avatar uri="" size={155} border={20} imageReduction={10} />
    <BottomCard>
      <Percentage>{percentage(progress)}</Percentage>
      <Success>Job Success</Success>
    </BottomCard>
  </Container>
);

export default memo(RichAvatar);
