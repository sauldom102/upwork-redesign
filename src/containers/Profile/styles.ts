import styled, { css } from 'styled-components/native';
import BaseSegmentedControl from 'reanimated-segmented-control';
import Animated from 'react-native-reanimated';
import { ScrollView } from 'react-native';
import { DataCard as BaseDataCard } from 'components';
import BaseAvailability from './Availability';
import { BodyProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = Animated.createAnimatedComponent(
  styled(ScrollView).attrs<BodyProps>(
    ({ headerHeight, theme, safeBottom }) => ({
      contentContainerStyle: {
        paddingTop: headerHeight + 36,
        paddingBottom: safeBottom,
        backgroundColor: theme.colors.white,
      },
    }),
  )<BodyProps>``,
);

export const TabContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 15px 15px;
`;

export const SegmentedControl = styled(BaseSegmentedControl).attrs(
  ({ theme }) => ({
    titleStyle: {
      fontFamily: 'Rubik-SemiBold',
      fontSize: 10,
    },
    tintColor: theme.colors.primary,
    backgroundColor: '#fafafa',
    borderRadius: 14,
  }),
)`
  height: 33px;
`;

export const Cards = styled.View`
  padding: 15px;
  background-color: #fafafa;
`;

const cardSpacing = css`
  margin-top: 15px;
`;

export const Availability = styled(BaseAvailability)`
  ${cardSpacing}
`;

export const DataCard = styled(BaseDataCard)`
  ${cardSpacing}
`;
