import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const PuzzlePieceIcon: FC<Props> = ({ size = 12, color = '#fff', style }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.499 2.186C5.806 1.957 6 1.623 6 1.25 6 .56 5.335 0 4.515 0c-.82 0-1.486.56-1.486 1.25 0 .37.192.704.497.933.43.37.33 1.146-.464 1.15H1a1 1 0 00-1 1V6.03c.005.665.775.75 1.147.393a1.25 1.25 0 11.002 1.659C.746 7.733.004 7.766 0 8.45V11a1 1 0 001 1h6.667a1 1 0 001-1V9.428c0-.816.742-.857 1.147-.447.23.305.563.497.936.497.69 0 1.25-.66 1.25-1.476 0-.815-.56-1.476-1.25-1.476-.371 0-.705.192-.934.495-.372.427-1.15.325-1.15-.468v-2.22a1 1 0 00-1-1H5.943c-.814-.004-.854-.743-.443-1.147zM6 9.916c0 .372-.162.706-.42.935-.348.404-.314 1.149.378 1.149H3.523c.67 0 .757-.774.399-1.147A1.25 1.25 0 116 9.917z"
      fill={color}
    />
  </Svg>
);

export default memo(PuzzlePieceIcon);
