import { useCallback, useState, useMemo, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import MESSAGES from 'models/Message/mock';
import format from 'date-fns/format';
import uuidv4 from 'uuid/v4';
import addSeconds from 'date-fns/addSeconds';
import { Message as MessageModel } from 'models';
import USERS from 'models/User/mock';
import { Props } from './types';

const useConnect = () => {
  const [messages, setMessages] = useState(MESSAGES);
  const [message, setMessage] = useState('');
  const [writing, setWriting] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setWriting(Math.random() > 0.25);
    }, 2000);

    return () => {
      clearInterval(t);
    };
  }, []);

  const {
    params: { userId },
  } = useRoute<Props['route']>();

  const user = useMemo(() => USERS.find((u) => u.id === userId)!, [userId]);

  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handleMessagePress = useCallback((msg: MessageModel) => {
    if (msg.photo) {
      // TODO: show photo in full screen mode
    }
  }, []);

  const extractKeyFromMessage = useCallback((item) => item.id, []);

  const messageIndex = useCallback(
    (msg: MessageModel) => messages.findIndex((m) => m.id === msg.id),
    [messages],
  );

  const handleSubmit = useCallback(() => {
    if (message.length) {
      setMessages((currentMessages) => [
        {
          id: uuidv4(),
          fromMe: true,
          text: message,
          at: addSeconds(new Date(), 300),
          previewAt: format(addSeconds(new Date(), 300), 'HH:mm'),
          seen: false,
        },
        ...currentMessages,
      ]);
      setMessage('');
    }
  }, [message]);

  return {
    writing,
    user,
    handleGoBack,
    handleMessagePress,
    extractKeyFromMessage,
    messageIndex,
    handleSubmit,
    messages,
    message,
    setMessage,
  };
};

export default useConnect;
