import styled from 'styled-components/native';
import { StarIcon } from 'components/Icons';
import { StarProps } from './types';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Star = styled(StarIcon).attrs<StarProps>(({ active, theme }) => ({
  size: 11,
  color: active ? '#FFBA49' : theme.colors.gray1,
}))<StarProps>`
  margin-right: ${({ last }) => (last ? 0 : 2)}px;
`;
