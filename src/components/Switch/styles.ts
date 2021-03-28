import styled from 'styled-components/native';
import SwitchBase from 'react-native-switch-pro';

// eslint-disable-next-line import/prefer-default-export
export const Switch = styled(SwitchBase).attrs(({ theme }) => ({
  backgroundActive: theme.colors.primary,
  backgroundInactive: theme.colors.gray1,
  circleStyle: {
    height: 24,
    aspectRatio: 1,
    marginHorizontal: 3,
  },
  height: 32,
  width: 52,
}))``;
