import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const AddIcon: FC<Props> = ({ size = 8, color = '#fff', style }) => (
  <Svg width={size} height={size} viewBox="0 0 8 8" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.5a.5.5 0 100 1h2.5V7a.5.5 0 101 0V4.5H7a.5.5 0 100-1H4.5V1a.5.5 0 00-1 0v2.5H1z"
      fill={color}
    />
  </Svg>
);

export default memo(AddIcon);
