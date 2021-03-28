import React, { FC, memo } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { Props } from './types';

const VerifiedIcon: FC<Props> = ({ size = 12, style }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={style}>
    <Circle cx={6} cy={6} r={6} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.071 5.767a1 1 0 10-1.414-1.414L5.536 6.474 4.12 5.06a1 1 0 00-1.414 1.414l2.121 2.122a1 1 0 001.414 0l2.83-2.829z"
      fill="#5BC0EB"
    />
  </Svg>
);

export default memo(VerifiedIcon);
