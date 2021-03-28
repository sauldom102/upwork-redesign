import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const RectCheckIcon: FC<Props> = ({ size = 15, style }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm13 4.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM6.536 8.982l.01.01a.897.897 0 001.272 0l.01-.01 1.9-1.9a.9.9 0 10-1.274-1.273L7.182 7.082l-.637-.636a.9.9 0 00-1.272 1.272l1.263 1.264z"
      fill="#6EB943"
    />
  </Svg>
);

export default memo(RectCheckIcon);
