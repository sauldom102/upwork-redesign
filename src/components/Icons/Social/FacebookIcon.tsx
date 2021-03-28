import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from '../types';

const FacebookIcon: FC<Props> = ({ size = 24, color = '#fff', style }) => (
  <Svg
    width={size}
    height={(size * 23) / 24}
    viewBox="0 0 24 23"
    fill="none"
    style={style}
  >
    <Path
      d="M23.5 11.57C23.5 5.219 18.351.07 12 .07S.5 5.219.5 11.57c0 5.74 4.205 10.497 9.703 11.36v-8.036h-2.92V11.57h2.92V9.036c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036c5.498-.863 9.703-5.62 9.703-11.36z"
      fill={color}
    />
  </Svg>
);

export default memo(FacebookIcon);
