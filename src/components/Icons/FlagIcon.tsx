import React, { FC, memo } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { Props } from './types';

const FlagIcon: FC<Props> = ({ size = 11, color = '#fff', style }) => (
  <Svg
    width={size}
    height={(size * 15) / 11}
    viewBox="0 0 11 15"
    fill="none"
    style={style}
  >
    <Path
      d="M10.367 4.763a.86.86 0 010 1.474l-6.065 3.64A.86.86 0 013 9.138V1.861a.86.86 0 011.302-.737l6.065 3.639z"
      fill={color}
    />
    <Rect width={2} height={15} rx={1} fill={color} />
  </Svg>
);

export default memo(FlagIcon);
