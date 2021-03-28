import styled from 'styled-components/native';
import Text from 'components/Text';
import IconButton from 'components/IconButton';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.device.safeTop + 21}px 12px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const Side = styled.View`
  min-width: 64px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Medium',
})`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled(IconButton).attrs(({ theme }) => ({
  iconColor: theme.colors.primary,
  bgColor: theme.colors.transparent,
  type: 'back',
}))``;
