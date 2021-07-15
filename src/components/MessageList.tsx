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
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(0);

  ::-webkit-scrollbar-track {
    background-color: #e8ecf4;
  }

  ::-webkit-scrollbar {
    margin-right: 4px;
    width: 10px;
    height: 50px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c1c9da;
    border-radius: 10px;
  }
`;

const MessageList = styled.div`
  margin: 8px 24px 36px;
  font-size: 16px;
  height: auto;
`;

const Typing = styled.div`
  width: 95%;
  padding: 0 50px 0;
  text-align: end;
  position: fixed;
  right: -10px;
`;

const Dots = styled.strong`
  letter-spacing: 2px;
`;

const Thread = () => {
  const messageList = useRef<HTMLDivElement>(null);
  const {
    state: { ourName, messages, typing },
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
        {!!typing.length && (
          <Typing>
            {`${typing[typing.length - 1][1].username} is typing`}
            <Dots>...</Dots>
          </Typing>
        )}
      </MessageList>
    </MessageListWrapper>
  );
};

export default Thread;
