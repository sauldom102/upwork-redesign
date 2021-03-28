import { useCallback } from 'react';
import { Control, useController } from 'react-hook-form';

type Params = {
  name: string;
  control: Control<any>;
};

const useCustomFormController = ({ name, control }: Params) => {
  const data = useController({
    name,
    control,
  });

  const { onChange, value } = data.field;

  const toggle = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  return { ...data, onChange, value, toggle };
};

export default useCustomFormController;
