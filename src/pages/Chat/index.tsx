import React, {
  useState, useEffect,
} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { socketStore } from '../../socket';
import Form from '../../components/ChatTextareaForm';

const ChatWrapper = styled.div`
  height: 100%;
`;

const Thread = styled.div`
  height: calc(100% - 62px);
`;

const Chat = () => {
  const [isMessagingStarted, setIsMessagingStarted] = useState(false);

  const handleSocketMessage = (e: any, socket: WebSocket) => {
    const messageIndex = e.data.match(/^(\d+)/)[0];
    const messageData = e.data.replace(/^(\d+)/, '');
    const messageType = messageData ? JSON.parse(messageData) : '';
    console.log(messageType);
    if (messageIndex === '3' && !isMessagingStarted) {
      socket.send('5');
      const data = JSON.stringify(['add user', 'James']);
      socket.send(`42${data}`);
      setIsMessagingStarted(true);
    }
  };

  useEffect(() => {
    const { socket } = socketStore;
    if (!socket) return;

    socket.onmessage = (e) => {
      handleSocketMessage(e, socket);
    };

    socket.onclose = () => {
      console.log('closed');
    };

    const interval = setInterval(() => socket.send('2'), 20000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(interval);
      socket.close();
    };
  }, []);

  return (
    <ChatWrapper>
      <Thread />
      <Form />
    </ChatWrapper>
  );
};

export default withRouter(Chat);
