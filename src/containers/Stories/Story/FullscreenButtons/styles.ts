import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { absoluteFill } from 'theme/snippets';

export const Container = styled.View`
  flex-direction: row;
  ${absoluteFill};
`;

export const Left = styled(RectButton).attrs({
  activeOpacity: 0,
})`
  flex: 1;
`;

export const Right = styled(RectButton).attrs({
  activeOpacity: 0,
})`
  flex: 1;
`;
