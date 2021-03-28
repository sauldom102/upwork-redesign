import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { FormTextInput, IconButton as BaseIconButton } from 'components';

export const Container = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.device.safeTop + 13}px 15px 12px;
  background-color: #fafafa;
`);

export const Input = styled(FormTextInput).attrs({
  inputContainerStyle: {
    borderRadius: 15,
  },
  inputStyle: {
    fontSize: 14,
  },
})`
  flex: 1;
`;

export const IconButton = styled(BaseIconButton).attrs(({ theme }) => ({
  bgColor: theme.colors.white,
}))`
  margin-left: 10px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.alphaBlack(0.05)};
`;
