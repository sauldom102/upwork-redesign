import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Title, Input } from './styles';

const Question: FC<Props> = ({
  name,
  placeholder,
  title,
  centered = false,
  biggerInput = false,
  control,
  style,
}) => (
  <Container style={style}>
    <Title centered={centered}>{title}</Title>
    <Input
      name={name}
      placeholder={placeholder}
      biggerInput={biggerInput}
      control={control}
      multiline
    />
  </Container>
);

export default memo(Question);
