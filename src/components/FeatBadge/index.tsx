import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Subtitle } from './styles';

const FeatBadge: FC<Props> = ({
  title,
  subtitle,
  style,
  titleStyle,
  subtitleStyle,
}) =>
  title || subtitle ? (
    <Container style={style}>
      <Title style={titleStyle}>{`${title} `}</Title>
      <Subtitle style={subtitleStyle}>{subtitle!}</Subtitle>
    </Container>
  ) : null;

export default memo(FeatBadge);
