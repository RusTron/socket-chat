import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { socketStore } from '../../socket';
import Form from '../../components/ChatTextareaForm';
import { AppContext } from '../../context';
import { ActionTypes } from '../../utils/enums';

const ChatWrapper = styled.div`
  height: 100%;
`;

const Thread = styled.div`
  height: calc(100% - 62px);
`;

const Chat = () => {
  const { state: { ourName, messages }, dispatch } = useContext(AppContext);
  console.log(messages);

  const handleSocketMessage = (e: any, socket: WebSocket): void => {
    const messageIndex = e.data.match(/^(\d+)/)[0];
    const messageData = e.data.replace(/^(\d+)/, '');
    const message = messageData ? JSON.parse(messageData) : '';
    console.log(message);
    if (messageIndex === '3' && !socketStore.connection) {
      socket.send('5');
      const data = JSON.stringify(['add user', ourName]);
      socket.send(`42${data}`);
      socketStore.connection = true;
    } else if (messageIndex === '42' && socketStore.connection) {
      if (!socketStore.firstMessage) {
        dispatch({
          type: ActionTypes.SET_NEW_MESSAGE,
          payload: message,
        });
        return;
      }

      dispatch({
        type: ActionTypes.SET_FIRST_MESSAGE,
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
