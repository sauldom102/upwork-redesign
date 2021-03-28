import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const StarIcon: FC<Props> = ({ size = 10, color = '#D1D1D1', style }) => (
  <Svg width={size} height={size} viewBox="0 0 10 10" fill="none" style={style}>
    <Path
      d="M4.552.34a.465.465 0 01.896 0l.963 3.102h3.117c.456 0 .646.611.277.892L7.284 6.251l.963 3.101c.14.454-.356.832-.726.552L5 7.987 2.479 9.904c-.37.28-.867-.098-.726-.552l.963-3.101-2.52-1.917c-.37-.28-.18-.892.276-.892H3.59L4.552.34z"
      fill={color}
    />
  </Svg>
);

export default memo(StarIcon);
