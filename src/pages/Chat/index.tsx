import React, { useEffect, useContext } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Toastify } from 'src/components/Notificaations/Toastify';
import { socketStore } from 'src/socket';
import Form from 'src/components/ChatTextareaForm';
import Thread from 'src/components/MessageList';
import { AppContext } from 'src/context';
import { ActionTypes, SocketActions } from 'src/utils/enums';
import { actionsForDispatch } from 'src/utils/constants';

const ChatWrapper = styled.div`
  height: 100%;
`;

const Chat: React.FC<RouteComponentProps<any>> = ({ history, match }) => {
  const { state: { ourName, messages, typing }, dispatch } = useContext(AppContext);
  console.log('messages', messages, 'typing', typing);
  console.log(history, match, ourName);

  const handleSocketMessage = (e: any, socket: WebSocket): void => {
    const messageIndex = e.data.match(/^(\d+)/)[0];
    const messageData = e.data.replace(/^(\d+)/, '');
    const message = messageData ? JSON.parse(messageData) : '';

    if (messageIndex === SocketActions.pong && !socketStore.connection) {
      socket.send(SocketActions.connectionOpened);
      const data = JSON.stringify(['add user', ourName]);
      socket.send(`${SocketActions.message}${data}`);
      socketStore.connection = true;
    } else if (messageIndex === SocketActions.message && socketStore.connection) {
      const action = message[0].replace(/ /, '_');

      if (!actionsForDispatch[action]) return;
      dispatch({
        type: actionsForDispatch[action] as Partial<ActionTypes>,
        payload: message,
      });

      socketStore.firstMessage = false;
    }
  };

  const handleSocketRequest = (socket: WebSocket) => {
    try {
      socket.send(SocketActions.ping);
    } catch (e) {
      toast('Connection closed');
      setTimeout(() => history.push('/'), 5000);
    }
  };

  useEffect(() => {
    const { socket } = socketStore;
    if (!socket) {
    // if (!socket || match.params.ourName !== ourName) {
      // history.push('/');
      return;
    }

    socket.onmessage = (e) => {
      handleSocketMessage(e, socket);
    };

    socket.onclose = () => {
      toast('Connection closed. Please refresh page!');
      setTimeout(() => history.push('/'), 5000);
    };

    socket.onerror = () => {
      toast('Something went wrong! Please refresh page');
    };

    const interval = setInterval(() => handleSocketRequest(socket), 20000);

    return () => {
      clearInterval(interval);
      socket.close();
      socketStore.connection = false;
      socketStore.firstMessage = true;
      dispatch({
        type: ActionTypes.SET_CLEAR_DATA,
      });
    };
  }, []);

  return (
    <ChatWrapper>
      <Toastify />
      <Thread />
      <Form />
    </ChatWrapper>
  );
};

export default withRouter(Chat);
