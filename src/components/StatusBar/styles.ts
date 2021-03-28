import styled from 'styled-components/native';
import { StatusBar as BaseStatusBar } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const StatusBar = styled(BaseStatusBar).attrs(({ theme }) => ({
  backgroundColor: theme.colors.transparent,
}))``;
