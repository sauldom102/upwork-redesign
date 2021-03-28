import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const RemoveIcon: FC<Props> = ({ size = 16, color = '#D1D1D1', style }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.121 11.536a1 1 0 101.415-1.415L9.414 8l2.122-2.121a1 1 0 00-1.415-1.415L8 6.586 5.879 4.464A1 1 0 104.464 5.88L6.586 8l-2.122 2.121a1 1 0 101.415 1.415L8 9.414l2.121 2.122z"
      fill={color}
    />
  </Svg>
);

export default memo(RemoveIcon);
