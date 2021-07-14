import React from 'react';
import styled from 'styled-components';
import { HeadingType } from 'src/utils/enums';
import { NewMessageType } from 'src/types';
import { Headings } from './Headings';

const MessageBody = styled.div<MessageProps>`
    border: 1px solid #D7DBE6;
    max-width: 40%;
    min-width: 140px;
    padding: 8px 12px;
    margin-top: 8px;
    display: inline-block;
    background-color: ${(props) => (props.fromMe ? '#E5F3F8' : 'inherit')};
    border-radius: ${(props) => (props.fromMe ? '10px 10px 0px 10px' : '0px 10px 10px 10px')};
`;

const MessageInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MessageTime = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #c1c9da;
`;
interface MessageProps {
  fromMe: boolean;
}

const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.fromMe ? 'flex-end' : 'flex-start')};
`;

const HeadingStyles = {
  margin: '2px 0',
};

interface Props {
  fromMe: boolean;
  message: NewMessageType;
}

const Message: React.FC<Props> = ({ fromMe, message }) => {
  console.log('gs');
  const { message: text, time, username } = message;
  return (
    <MessageWrapper fromMe={fromMe}>
      <MessageBody fromMe={fromMe}>
        {!fromMe && <Headings tag={HeadingType.h5} styles={HeadingStyles}>{username}</Headings>}
        {text}
        <MessageInfo>
          <MessageTime>{time}</MessageTime>
        </MessageInfo>
      </MessageBody>
    </MessageWrapper>
  );
};

export default Message;
