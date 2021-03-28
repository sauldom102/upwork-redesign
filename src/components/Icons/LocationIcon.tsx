import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const LocationIcon: FC<Props> = ({ size = 8, style }) => (
  <Svg
    width={size}
    height={(size * 9) / 8}
    viewBox="0 0 8 9"
    fill="none"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.196 8.46C5.344 7.459 7.2 5.839 7.2 3.6a3.6 3.6 0 00-7.2 0c0 2.239 1.856 3.859 3.004 4.86.236.206.442.386.596.54.154-.154.36-.334.596-.54zM3.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill="#D1D1D1"
    />
  </Svg>
);

export default memo(LocationIcon);
