import React, { FC, memo } from 'react';
import { Props } from './types';
import { Container, Image } from './styles';

const IMAGE = require('assets/images/profile.png');

const Avatar: FC<Props> = ({ uri, size, border, imageReduction, style }) => (
  <Container size={size} style={style}>
    <Image
      source={uri ? { uri } : IMAGE}
      size={size}
      border={border}
      reduction={imageReduction}
    />
  </Container>
);

export default memo(Avatar);
