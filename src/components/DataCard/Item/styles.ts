import styled from 'styled-components/native';
import Text from 'components/Text';
import { VerifiedStarIcon } from 'components/Icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Subtitle = styled(Title)`
  color: ${({ theme }) => theme.colors.gray1};
  margin-left: 3px;
`;

export const VerifiedIcon = styled(VerifiedStarIcon)`
  margin-left: 4px;
  margin-right: 2px;
`;
