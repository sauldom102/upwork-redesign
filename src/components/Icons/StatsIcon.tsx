import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const StatsIcon: FC<Props> = ({ size = 20, color = '#D1D1D1', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1H9zm6-1a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v11zM1 15a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1H2a1 1 0 00-1 1v9zm0 3a1 1 0 100 2h18a1 1 0 100-2H1z"
      fill={color}
    />
  </Svg>
);

export default memo(StatsIcon);
