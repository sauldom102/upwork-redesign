import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { realTimeData, useCustomForm } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const handleSubmit = useCallback(() => {}, []);

  const { control } = useCustomForm({
    defaultValues: {},
    onSubmit: handleSubmit,
  });

  const handlePressBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressLogout = useCallback(() => {
    realTimeData.setData({
      loggedIn: false,
    });
  }, []);

  return {
    handleSubmit,
    handlePressBack,
    control,
    handlePressLogout,
  };
};

export default useConnect;
