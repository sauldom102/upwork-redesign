import React, { FC, memo } from 'react';
import { Props } from './types';
import {
  Container,
  Title,
  Description,
  PlayButton,
  Body,
  FeatItem,
} from './styles';

const MainInfo: FC<Props> = () => {
  return (
    <Container>
      <Title>Product UI/UX Designer</Title>
      <Description>
        Hi, My name is Tony Stark! I&apos;m from California, USA. I&apos;m
        seasoned professional with 12+ years of experience web and mobile UI/UX
        design, 4 years of Product Design, 8+ years team management in own,
        international and California, USA companies.
      </Description>
      <PlayButton title="Play Video" leftIcon="play" />
      <Body>
        <FeatItem title="$ 45.00" subtitle="Hourly Rate" />
        <FeatItem title="$ 200k+" subtitle="Total Earned" />
        <FeatItem title="70" subtitle="Jobs" />
        <FeatItem title="5,270" subtitle="Hours Worked" />
      </Body>
    </Container>
  );
};

export default memo(MainInfo);
