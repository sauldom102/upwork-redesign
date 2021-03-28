import React, { FC, memo } from 'react';
import { Props } from './types';
import { Wall } from './styles';
import useLogic from './logic';

const BlurWall: FC<Props> = () => {
  const { animatedStyle } = useLogic();

  return <Wall style={animatedStyle} />;
};

export default memo(BlurWall);
