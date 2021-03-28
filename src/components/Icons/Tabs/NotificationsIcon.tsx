import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const NotificationsIcon: FC<Props> = ({
  size = 16,
  focused = false,
  style,
}) => (
  <Svg
    width={size}
    height={(size * 20) / 16}
    viewBox="0 0 16 20"
    fill="none"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0a1.6 1.6 0 00-1.6 1.6v.202A6.403 6.403 0 001.6 8v5.6H2a2 2 0 00-2 2v.2a1 1 0 001 1h14a1 1 0 001-1v-.2a2 2 0 00-2-2h.4V8a6.403 6.403 0 00-4.8-6.198V1.6A1.6 1.6 0 008 0zM5.6 17.6a2.4 2.4 0 104.8 0H5.6z"
      fill={focused ? '#6EB943' : '#D1D1D1'}
    />
  </Svg>
);

export default memo(NotificationsIcon);
