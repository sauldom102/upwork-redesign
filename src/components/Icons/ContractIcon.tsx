import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const ContractIcon: FC<Props> = ({ size = 18, color = '#D1D1D1', style }) => (
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
      d="M3 0a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V3a3 3 0 00-3-3H3zm6 3a1 1 0 000 2h5a1 1 0 100-2H9zM3 8a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm1 3a1 1 0 100 2h10a1 1 0 100-2H4zm-1 5a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1zm10-1a1 1 0 100 2h1a1 1 0 100-2h-1z"
      fill={color}
    />
  </Svg>
);

export default memo(ContractIcon);
