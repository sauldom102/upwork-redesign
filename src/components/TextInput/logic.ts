import { TextInputProps } from 'react-native';
import { InputType } from './types';

type InputExtraPropsParams = {
  type?: InputType;
};

// eslint-disable-next-line import/prefer-default-export
export const getInputExtraProps = ({
  type,
}: InputExtraPropsParams): Partial<TextInputProps> => {
  if (type === 'email') {
    return {
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      autoCorrect: false,
    };
  }
  if (type === 'password') {
    return {
      secureTextEntry: true,
    };
  }
  if (type === 'url') {
    return {
      autoCapitalize: 'none',
      keyboardType: 'url',
    };
  }
  if (type === 'phone') {
    return {
      keyboardType: 'phone-pad',
    };
  }
  if (type === 'number') {
    return {
      keyboardType: 'number-pad',
      returnKeyType: 'done',
    };
  }
  return {};
};
