import { useController } from 'react-hook-form';
import { Props } from './types';

const useLogic = ({ control, name }: Props) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return {
    error,
    onChangeText: onChange,
    onBlur,
    value,
  };
};

export default useLogic;
