import React, { FC, memo } from 'react';
import { DefaultSegmentedControl } from './styles';
import { Props } from './types';

const SegmentedControl: FC<Props> = (props) => (
  <DefaultSegmentedControl {...props} />
);

export default memo(SegmentedControl);
