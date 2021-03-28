import styled from 'styled-components/native';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { VariantProps } from './types';
import { BACKGROUND_COLORS, TITLE_COLORS } from './utils';

export const Container = styled(RectButton)`
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(27, 83, 6, 0.15);
`;

export const Main = styled(View)<VariantProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 45px;
  padding: 0 15px;
  border-radius: 15px;
  background-color: ${({ variant }) => BACKGROUND_COLORS[variant]};
  justify-content: center;
  z-index: -1;
`;

export const Left = styled.View`
  margin-right: 8px;
`;

export const Title = styled(Text).attrs<VariantProps>({
  family: 'Rubik-Bold',
})<VariantProps>`
  font-size: 14px;
  color: ${({ variant, theme }) =>
    TITLE_COLORS?.[variant] ?? theme.colors.white};
  text-align: center;
`;
