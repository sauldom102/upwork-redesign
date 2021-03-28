import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const SearchIcon: FC<Props> = ({ size = 16, style }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.335 11.749a6.5 6.5 0 111.414-1.414l2.962 2.962a1 1 0 01-1.414 1.414l-2.962-2.962zM11 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      fill="#6EB943"
    />
  </Svg>
);

export default memo(SearchIcon);
