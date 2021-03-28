import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { realTimeData } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { navigate } = useNavigation<Props['navigation']>();

  const handlePressSocialButton = useCallback(() => {
    realTimeData.setData({
      loggedIn: true,
    });
  }, []);

  const handlePressContinueWithEmail = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return {
    handlePressContinueWithEmail,
    handlePressSocialButton,
  };
};

export default useConnect;
