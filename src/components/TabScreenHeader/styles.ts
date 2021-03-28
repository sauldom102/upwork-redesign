import styled from 'styled-components/native';
import Text from 'components/Text';
import IconButton from 'components/IconButton';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.device.safeTop + 21}px 35px 7px;
`;

export const Title = styled(Text).attrs({
  family: 'Rubik-Bold',
})`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const AddButton = styled(IconButton).attrs(({ theme }) => ({
  iconColor: theme.colors.white,
  bgColor: theme.colors.primary,
  type: 'add',
  size: 's',
}))`
  box-shadow: 0 2px 4px rgba(27, 83, 6, 0.15);
`;
