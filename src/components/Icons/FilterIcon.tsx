import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const FilterIcon: FC<Props> = ({ size = 15, style }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.732 1H14a1 1 0 110 2H4.732a2 2 0 01-3.464 0H1a1 1 0 010-2h.268a2 2 0 013.464 0zm9 5.5H14a1 1 0 110 2h-.268a2 2 0 01-3.464 0H1a1 1 0 010-2h9.268a2 2 0 013.464 0zM14 12H9.232a2 2 0 00-3.464 0H1a1 1 0 100 2h4.768a2 2 0 003.464 0H14a1 1 0 100-2z"
      fill="#6EB943"
    />
  </Svg>
);

export default memo(FilterIcon);
