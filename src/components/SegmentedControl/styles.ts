import { ComponentProps } from 'react';
import styled from 'styled-components/native';
import BaseSegmentedControl from 'reanimated-segmented-control';

// eslint-disable-next-line import/prefer-default-export
export const DefaultSegmentedControl = styled(BaseSegmentedControl).attrs(
  ({ theme }) =>
    ({
      titleStyle: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 14,
      },
      tintColor: theme.colors.primary,
      backgroundColor: theme.colors.white,
    } as ComponentProps<typeof BaseSegmentedControl>),
)`
  height: 35px;
`;
