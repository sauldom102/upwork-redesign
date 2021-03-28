import React, { FC, memo } from 'react';
import LottieView from 'lottie-react-native';
import { Props } from './types';

const LoadingAnim = require('assets/lottie/loading.json');

const Loader: FC<Props> = ({ style }) => (
  <LottieView source={LoadingAnim} style={style} autoPlay loop />
);

export default memo(Loader);
