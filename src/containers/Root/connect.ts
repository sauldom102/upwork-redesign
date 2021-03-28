import { useCallback } from 'react';
import RNBootSplash from 'react-native-bootsplash';

const useConnect = () => {
  const handleReady = useCallback(async () => {
    const status = await RNBootSplash.getVisibilityStatus();
    if (status !== 'hidden') {
      setTimeout(() => {
        RNBootSplash.hide({ fade: true });
      }, 1000);
    }
  }, []);

  return {
    handleReady,
  };
};

export default useConnect;
