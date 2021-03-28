import React, { FC, memo } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { Props } from './types';

const PlayRoundIcon: FC<Props> = ({ size = 15, color = '#fff', style }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={style}>
    <Circle cx={7.5} cy={7.5} r={6.5} stroke={color} strokeWidth={2} />
    <Path
      d="M10.004 7.189a.5.5 0 010 .857l-3.528 2.117a.5.5 0 01-.758-.428V5.5a.5.5 0 01.758-.429l3.528 2.117z"
      fill={color}
    />
  </Svg>
);

export default memo(PlayRoundIcon);
