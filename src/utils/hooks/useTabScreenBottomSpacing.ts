import { useTheme } from 'styled-components/native';

const useTabScreenBottomSpacing = () => {
  const { device } = useTheme();

  return 72 + 22 + 15 + device.safeBottom;
};

export default useTabScreenBottomSpacing;
