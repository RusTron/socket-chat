import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { socketStore } from 'src/socket';
import Form from 'src/components/ChatTextareaForm';
import { AppContext } from 'src/context';
import { ActionTypes } from 'src/utils/enums';
import { actionsForDispatch } from 'src/utils/constants';

const ChatWrapper = styled.div`
  height: 100%;
`;

const Thread = styled.div`
  height: calc(100% - 62px);
`;

const Chat = () => {
  const { state: { ourName, messages, typing }, dispatch } = useContext(AppContext);
  console.log('messages', messages, 'typing', typing);

  const handleSocketMessage = (e: any, socket: WebSocket): void => {
    const messageIndex = e.data.match(/^(\d+)/)[0];
    const messageData = e.data.replace(/^(\d+)/, '');
    const message = messageData ? JSON.parse(messageData) : '';

    if (messageIndex === '3' && !socketStore.connection) {
      socket.send('5');
      const data = JSON.stringify(['add user', ourName]);
      socket.send(`42${data}`);
      socketStore.connection = true;
    } else if (messageIndex === '42' && socketStore.connection) {
      const action = message[0].replace(/ /, '_');

      if (!actionsForDispatch[action]) return;
      dispatch({
        type: actionsForDispatch[action] as Partial<ActionTypes>,
        payload: message,
      });

      socketStore.firstMessage = false;
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

    return () => {
      clearInterval(interval);
      socket.close();
      socketStore.connection = false;
      socketStore.firstMessage = true;
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
