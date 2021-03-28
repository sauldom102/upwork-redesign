import styled, { css } from 'styled-components/native';
import { Button, FeatBadge, Text, DataCard as BaseDataCard } from 'components';
import BaseActivityCard from './ActivityCard';
import BaseSkillsCard from './SkillsCard';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.ScrollView``;

export const Main = styled.View`
  padding: 12px 35px 25px;
`;

export const Description = styled(Text)`
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Feats = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Feat = styled(FeatBadge).attrs({
  titleStyle: {
    color: '#c4c4c4',
  },
})`
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #fafafa;
`;

export const Cards = styled.View`
  padding: 0 15px 15px;
  background-color: #fafafa;
`;

const cardSpacing = css`
  margin-top: 15px;
`;

export const ActivityCard = styled(BaseActivityCard)`
  ${cardSpacing}
`;

export const SkillsCard = styled(BaseSkillsCard)`
  ${cardSpacing}
`;

export const DataCard = styled(BaseDataCard)`
  ${cardSpacing}
`;

export const FlagButton = styled(Button).attrs({
  mainStyle: {
    height: 35,
    borderRadius: 10,
    backgroundColor: '#e15554',
  },
})`
  border-radius: 10px;
  ${cardSpacing}
`;
