import { useCallback, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { device } from 'theme';
import { useCustomForm } from 'utils';
import { initialValues } from './constants';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const [step, setStep] = useState(0);

  const cards = useRef<ScrollView>(null);

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressButton = useCallback(() => {
    const newStep = Math.min(4, step + 1);

    if (newStep === 3) {
      setStep(newStep);
      return;
    }

    if (newStep === 4) {
      handlePressClose();
      return;
    }

    cards.current?.scrollTo({
      x: newStep * device.width,
    });
  }, [step, handlePressClose]);

  const { control, submit } = useCustomForm({
    onSubmit: handlePressButton,
    defaultValues: initialValues,
  });

  const handleMomentumScrollEnd = useCallback(
    ({
      nativeEvent: {
        contentOffset,
        layoutMeasurement: { width },
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      setStep(Math.round(contentOffset.x / width));
    },
    [],
  );

  const finished = step >= 3;

  return {
    step,
    cards,
    handlePressClose,
    control,
    submit,
    handleMomentumScrollEnd,
    finished,
  };
};

export default useConnect;
