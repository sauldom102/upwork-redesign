import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const SubstractIcon: FC<Props> = ({ size = 8, color = '#fff', style }) => (
  <Svg
    width={size}
    height={(size * 2) / 8}
    viewBox="0 0 8 2"
    fill="none"
    style={style}
  >
    <Path
      d="M.5 1A.5.5 0 011 .5h6a.5.5 0 010 1H1A.5.5 0 01.5 1z"
      fill={color}
    />
  </Svg>
);

export default memo(SubstractIcon);
