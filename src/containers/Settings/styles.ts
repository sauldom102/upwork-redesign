import styled from 'styled-components/native';
import { LabeledSwitch, Button } from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const Body = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16 + theme.device.safeBottom,
  },
  alwaysBounceVertical: false,
}))``;

export const Block = styled.View`
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #f0f0f0;
`;

export const Switch = styled(LabeledSwitch)``;

export const LogoutButton = styled(Button).attrs(({ theme }) => ({
  mainStyle: {
    height: 35,
    borderRadius: 10,
    backgroundColor: theme.colors.red,
  },
}))`
  margin-top: 20px;
`;
