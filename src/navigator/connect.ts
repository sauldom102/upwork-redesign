import { useRealTimeData } from 'utils';

const useConnect = () => {
  const loggedIn = useRealTimeData('loggedIn');

  return {
    loggedIn,
  };
};

export default useConnect;
