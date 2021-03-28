import { SubmitHandler } from 'react-hook-form';
import { InitialValues } from '../constants';

export type Props = {
  onSubmit: SubmitHandler<InitialValues>;
};
