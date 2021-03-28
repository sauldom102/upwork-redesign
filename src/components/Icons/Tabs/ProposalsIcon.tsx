import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const ProposalsIcon: FC<Props> = ({ size = 18, focused = false, style }) => (
  <Svg
    width={size}
    height={(size * 20) / 18}
    viewBox="0 0 18 20"
    fill="none"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3h-1.416a5 5 0 10-9.168 0H3a3 3 0 01-3-3V3zm4 0a1 1 0 000 2h10a1 1 0 100-2H4zM3 8a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm10 8a4 4 0 11-8 0 4 4 0 018 0zm-5.06 2.032l-1.415-1.414a1 1 0 111.414-1.415l.707.708 1.415-1.415a1 1 0 011.414 1.415l-2.121 2.12a1 1 0 01-1.415 0z"
      fill={focused ? '#6EB943' : '#D1D1D1'}
    />
  </Svg>
);

export default memo(ProposalsIcon);
