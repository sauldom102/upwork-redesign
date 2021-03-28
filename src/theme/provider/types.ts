import type { useThemeInternal } from '.';

export type Props = {
  children: Element[];
};

type Theme = ReturnType<typeof useThemeInternal>;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
