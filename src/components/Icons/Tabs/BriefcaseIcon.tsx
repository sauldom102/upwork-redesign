import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const BriefcaseIcon: FC<Props> = ({ size = 20, focused = false, style }) => (
  <Svg
    width={size}
    height={(size * 19) / 20}
    viewBox="0 0 20 19"
    fill="none"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2a2 2 0 012-2h4a2 2 0 012 2v1h-1V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1H6V2zM0 6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 00-2-2H9a2 2 0 00-2 2H2a2 2 0 01-2-2V6zm9 9a2 2 0 01-2-2H2a1.995 1.995 0 01-1.5-.677V17a2 2 0 002 2h15a2 2 0 002-2v-4.677A1.995 1.995 0 0118 13h-5a2 2 0 01-2 2H9zm0-4a1 1 0 00-1 1v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 00-1-1H9z"
      fill={focused ? '#6EB943' : '#D1D1D1'}
    />
  </Svg>
);

export default memo(BriefcaseIcon);
