import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const MessagesIcon: FC<Props> = ({ size = 20, focused = false, style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3a3 3 0 013-3h14a3 3 0 013 3v9.79a3 3 0 01-3 3H9.474L5.264 20v-4.21H3a3 3 0 01-3-3V3zm8.57 1.601a.737.737 0 111.45.272L9.807 6h1.134l.262-1.399a.737.737 0 011.45.272L12.441 6H14a.75.75 0 010 1.5h-1.84l-.187 1H13a.75.75 0 010 1.5h-1.308l-.262 1.399a.737.737 0 01-1.45-.272L10.193 10H9.058l-.262 1.399a.737.737 0 01-1.45-.272L7.559 10H6a.75.75 0 010-1.5h1.84l.187-1H7A.75.75 0 017 6h1.308l.262-1.399zM9.34 8.5l.187-1h1.134l-.188 1H9.34z"
      fill={focused ? '#6EB943' : '#D1D1D1'}
    />
  </Svg>
);

export default memo(MessagesIcon);
