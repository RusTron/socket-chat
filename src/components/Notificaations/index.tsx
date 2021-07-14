import React, { Fragment } from 'react';
import styled from 'styled-components';
import { NotificationType } from 'src/types';
import { ActionTypes } from 'src/utils/enums';

const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const NotificationBody = styled.div`
  width: auto;
  max-width: 70%;
  min-width: 20%;
  /* background-color: #fcfafa; */
  border-radius: 16px;
  padding: 2px 10px;
  text-align: center;
`;

interface Props {
  message: NotificationType;
}

const Notification: React.FC<Props> = ({ message }) => {
  const chooseNotificationMessage = (type: Partial<ActionTypes>) => {
    switch (type) {
      case ActionTypes.SET_USER_JOIN:
        return `${message[1].username} joined`;
      case ActionTypes.SET_USER_LEFT:
        return `${message[1].username} left`;
      case ActionTypes.SET_FIRST_MESSAGE:
        return 'Welcome to Socket.IO Chat';
      default:
        return '';
    }
  };

  return (
    <Fragment key={`${message[1].username} ${Date.now()}`}>
      <NotificationWrapper>
        <NotificationBody>{chooseNotificationMessage(message[0])}</NotificationBody>
      </NotificationWrapper>
      <NotificationWrapper>
        <NotificationBody>{`there are ${message[1].numUsers} participants`}</NotificationBody>
      </NotificationWrapper>
    </Fragment>
  );
};

export default Notification;
