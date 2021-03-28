import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from '../types';

const GoogleIcon: FC<Props> = ({ size = 24, style }) => (
  <Svg
    width={size}
    height={(size * 23) / 24}
    viewBox="0 0 24 23"
    fill="none"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.04 11.761c0-.815-.073-1.6-.21-2.352H12v4.448h6.19a5.29 5.29 0 01-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
      fill="#4285F4"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.723v2.98A11.496 11.496 0 0012 23z"
      fill="#34A853"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.565 13.685a6.913 6.913 0 01-.36-2.185c0-.758.13-1.495.36-2.185v-2.98H1.723A11.495 11.495 0 00.5 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
      fill="#FBBC05"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.703 1.14 15.1 0 12 0A11.496 11.496 0 001.723 6.335l3.842 2.98C6.47 6.597 9.005 4.574 12 4.574z"
      fill="#EA4335"
    />
  </Svg>
);

export default memo(GoogleIcon);
