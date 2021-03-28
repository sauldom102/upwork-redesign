import { Control } from 'react-hook-form';

export type Props = {
  step: number;
  totalSteps: number;
  onPressButton?: () => void;
  control: Control<any>;
};
