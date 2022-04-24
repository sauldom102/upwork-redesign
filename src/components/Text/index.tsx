import React, { FC, memo, forwardRef } from 'react';
import { Text as NativeText } from 'react-native';
import { Props } from './types';

const Text: FC<Props> = forwardRef<NativeText, Props>(
  ({ family = 'Rubik-Regular', style, ...rest }, ref) => {
    const font = {
      fontFamily: family,
    };
    return (
      <NativeText testID="text" style={[font, style]} ref={ref} {...rest} />
    );
  },
);

export default memo(Text);
