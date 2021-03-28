import React, { FC, memo } from 'react';
import Svg, { Defs, Stop, Circle, LinearGradient } from 'react-native-svg';
import { Props as IconProps } from './types';

type Props = IconProps & {
  colors?: string[];
};

const CircleGradient: FC<Props> = ({
  size = 68,
  colors = ['#fff', '#fff'],
  style,
}) => (
  <Svg width={size} height={size} viewBox="0 0 68 68" style={style}>
    <Defs>
      <LinearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="100%">
        {colors.map((c, i) => (
          <Stop key={c} offset={(i + 1) / colors.length} stopColor={c} />
        ))}
      </LinearGradient>
    </Defs>
    <Circle cx="34" cy="34" r="34" fill="url(#grad)" />
  </Svg>
);

export default memo(CircleGradient);
