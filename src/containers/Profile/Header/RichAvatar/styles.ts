import styled from 'styled-components/native';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text, Avatar as BaseAvatar } from 'components';

export const Container = styled.View`
  align-self: center;
`;

export const Progress = styled(ProgressCircle).attrs(({ theme }) => ({
  progressColor: theme.colors.pictonBlue,
  backgroundColor: '#f4f4f4',
}))`
  width: 165px;
  height: 165px;
  transform: rotate(180deg);
  align-self: center;
`;

export const Avatar = styled(BaseAvatar)`
  position: absolute;
  top: 5px;
  bottom: 5px;
  text-align: center;
  align-self: center;
`;

export const BottomCard = styled.View`
  align-self: center;
  padding: 1px 3.5px 4px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  margin-top: -24px;
`;

export const Percentage = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const Success = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  text-transform: uppercase;
  font-size: 7px;
  color: #d1d1d1;
`;
