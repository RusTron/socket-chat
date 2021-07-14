import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ActionTypes } from 'src/utils/enums';
import { AppContext } from 'src/context';
import { NotificationType } from 'src/types';
import Notification from './Notificaations';
import Message from './Message';

const MessageListWrapper = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  height: calc(100% - 62px);
  flex-grow: 1;
  flex-direction: column;
  position: relative;
`;

const MessageList = styled.div`
  margin: 8px 24px 36px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Thread = () => {
  const messageList = useRef<HTMLDivElement>(null);
  const {
    state: { ourName, messages },
  } = useContext(AppContext);

  useEffect(() => {
    if (!messageList.current || !messageList.current.lastChild) return;
    (messageList.current.lastChild as any).scrollIntoView();
  });

  return (
    <MessageListWrapper>
      <MessageList ref={messageList}>
        {messages.map(
          (message) => (message[0] === ActionTypes.SET_NEW_MESSAGE && (
            <Message fromMe={message[1].username === ourName} message={message[1]} />
          )) || <Notification message={message as NotificationType} />,
        )}
      </MessageList>
    </MessageListWrapper>
  );
};

export default Thread;
