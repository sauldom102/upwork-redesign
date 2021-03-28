import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const PremiumIcon: FC<Props> = ({ size = 15, style }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={style}>
    <Path
      d="M0 2.055C0 .92.895 0 2 0h11c1.105 0 2 .92 2 2.055v7.122c0 .687-.334 1.329-.89 1.71l-5.5 3.768c-.672.46-1.548.46-2.22 0l-5.5-3.768A2.071 2.071 0 010 9.177V2.055z"
      fill="#5BC0EB"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 3a.5.5 0 100-1 .5.5 0 000 1zM3 5l2.25 1L7.5 4l2.25 2L12 5l-1 3H4L3 5zm8 4v1H4V9h7zM3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zm9.5.5a.5.5 0 100-1 .5.5 0 000 1z"
      fill="#fff"
    />
  </Svg>
);

export default memo(PremiumIcon);
