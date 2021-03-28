import styled from 'styled-components/native';
import { View } from 'react-native';
import { FormTextInput, Button as BaseButton } from 'components';

export const Container = styled(View)``;

export const TextInput = styled(FormTextInput)`
  margin-bottom: 16px;
`;

export const Button = styled(BaseButton)`
  margin-top: 4px;
`;
