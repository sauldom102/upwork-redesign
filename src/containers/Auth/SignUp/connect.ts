import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { realTimeData } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { navigate, canGoBack, goBack } = useNavigation<Props['navigation']>();

  const handleSubmit = useCallback(() => {
    realTimeData.setData({
      loggedIn: true,
    });
  }, []);

  const handlePressBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressBottomButton = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return {
    handleSubmit,
    handlePressBack,
    handlePressBottomButton,
  };
};

export default useConnect;
