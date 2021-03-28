import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const ReportsIcon: FC<Props> = ({ size = 20, color = '#D1D1D1', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 .013A9.501 9.501 0 0119.987 9H11V.013zM9.474 10.526V2.012a9 9 0 108.514 8.514H9.474z"
      fill={color}
    />
  </Svg>
);

export default memo(ReportsIcon);
