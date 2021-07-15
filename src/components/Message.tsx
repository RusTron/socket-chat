import React from 'react';
import styled from 'styled-components';
import { HeadingType } from 'src/utils/enums';
import { NewMessageType } from 'src/types';
import { Headings } from './Headings';

const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.fromMe ? 'flex-end' : 'flex-start')};
`;

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

const Avatar = styled.div`
  margin: 8px 8px 0 -8px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #009bb7;
  text-align: center;
  padding-top: 4px;
  font-weight: 900px;
  color: #fff;
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

const HeadingStyles = {
  margin: '2px 0',
};

interface Props {
  fromMe: boolean;
  message: NewMessageType;
}

const Message: React.FC<Props> = ({ fromMe, message }) => {
  const { message: text, time, username } = message;
  return (
    <MessageWrapper fromMe={fromMe}>
      {!fromMe && <Avatar>{username[0].toUpperCase()}</Avatar>}
      <MessageBody fromMe={fromMe}>
        {!fromMe && <Headings tag={HeadingType.h4} styles={HeadingStyles}>{username}</Headings>}
        {text}
        <MessageInfo>
          <MessageTime>{time}</MessageTime>
        </MessageInfo>
      </MessageBody>
    </MessageWrapper>
  );
};

export default Message;
