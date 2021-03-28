import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';
import {
  DeepPartial,
  SubmitErrorHandler,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';

type LogicParams<T> = {
  defaultValues: UnpackNestedValue<DeepPartial<T>>;
  onSubmit: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  validationSchema?: ObjectSchema<any>;
};

const useCustomForm = <T>({
  defaultValues,
  onSubmit,
  onError,
  validationSchema,
}: LogicParams<T>) => {
  const formMethods = useForm<T>({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    mode: 'onTouched',
  });
  const { handleSubmit } = formMethods;

  const submit = useMemo(() => handleSubmit(onSubmit, onError), [
    handleSubmit,
    onSubmit,
    onError,
  ]);

  return {
    ...formMethods,
    formMethods,
    submit,
    isValid: formMethods.formState.isValid,
  };
};

export default useCustomForm;
