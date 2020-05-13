import styled from 'styled-components/native';
import { StatusBar as BaseStatusBar } from 'react-native';

export const StatusBar = styled(BaseStatusBar).attrs(({ theme }) => ({
  backgroundColor: theme.colors.transparent,
}))``;
