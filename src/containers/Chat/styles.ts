import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Message } from 'models';
// import DefaultPaperClipIcon from 'assets/svg/PaperClip';
import { SeparatorProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.device.safeTop}px 0
    ${({ theme }) => theme.device.safeBottom}px;
`;

export const Messages = styled(FlatList as new () => FlatList<Message>)`
  padding: 40px 20px 0 20px;
`;

export const Separator = styled.View<SeparatorProps>`
  height: ${({ fromSame }) => (fromSame ? 4 : 10)}px;
`;

export const MessagesFooter = styled.View`
  height: 60px;
`;

export const NewMessageContainer = styled.View`
  flex-direction: row;
  padding: 12px 16px;
  border-color: #f4f4f4;
  border-top-width: 1px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 4px;
  padding: 0;
  font-family: Rubik-Regular;
  color: #222;
`;

// export const PaperClipIcon = styled(DefaultPaperClipIcon)`
//   margin-left: auto;
// `;

export const Body = styled.KeyboardAvoidingView.attrs(({ theme }) => ({
  behavior: theme.device.isIOS ? 'padding' : undefined,
}))`
  flex: 1;
`;
