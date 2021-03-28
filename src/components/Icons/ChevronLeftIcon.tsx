import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const ChevronLeftIcon: FC<Props> = ({
  size = 15,
  color = '#6EB943',
  style,
}) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.707 6.364a1 1 0 000 1.414l5.657 5.657a1 1 0 101.414-1.414l-4.95-4.95 4.95-4.95A1 1 0 106.364.707L.707 6.364z"
      fill={color}
    />
  </Svg>
);

export default memo(ChevronLeftIcon);
