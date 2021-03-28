import styled from 'styled-components/native';
import { SegmentedControl as BaseSegmentedControl } from 'components';
import BaseItem from './Item';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const SegmentedControl = styled(BaseSegmentedControl)`
  margin: 14px 15px 0;
`;

export const Body = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: 15,
    paddingBottom: theme.device.safeBottom,
    marginTop: 10,
  },
  alwaysBounceVertical: false,
}))``;

export const Item = styled(BaseItem)`
  margin-top: 5px;
`;
