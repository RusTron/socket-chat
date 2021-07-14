import React, { useState, useRef, useContext, FormEvent } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { AppContext } from 'src/context';
import { setNewMessage } from 'src/context/actions';
import { NewMessage } from 'src/types';
import { ReactComponent as InActiveLabel } from 'src/assets/images/inactive.svg';
import { ReactComponent as HalfLabel } from 'src/assets/images/half-label.svg';
import { socketStore } from 'src/socket';
import { ActionTypes, ButtonType, SocketActions } from 'src/utils/enums';
import { Form } from './Form';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondHalfLabel = styled(HalfLabel)`
  transform: rotateX(180deg);
  margin-top: -2px;
`;

const FormStyles = {
  width: '100%',
  maxHeight: '62px',
  height: '62px',
  borderTop: '1px solid #D7DBE6',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const buttonStyles = {
  backgroundColor: '#01859C',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
};

const ChatTextareaForm = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const textarea = useRef<HTMLTextAreaElement>(null);

  const {
    state: { ourName },
    dispatch,
  } = useContext(AppContext);

  const addData = (e: FormEvent) => {
    e.preventDefault();

    if (!textarea.current) return;

    const data = [
      ActionTypes.SET_NEW_MESSAGE,
      { username: ourName, message: textarea.current.value, time: moment().format('HH:mm') },
    ];

    dispatch(setNewMessage(data as NewMessage));

    if (socketStore.socket) {
      socketStore.socket.send(
        `${SocketActions.message}${JSON.stringify([ActionTypes.SET_NEW_MESSAGE, textarea.current.value])}`,
      );
    }
    textarea.current.value = '';
  };

  return (
    <Form onSubmit={addData} styles={FormStyles}>
      <Form.Textarea ref={textarea} setButtonActive={setButtonActive} />
      <Form.SendButton type={ButtonType.submit} styles={buttonActive ? buttonStyles : undefined}>
        <Label>
          {buttonActive ? (
            <>
              <HalfLabel />
              <SecondHalfLabel />
            </>
          ) : (
            <InActiveLabel />
          )}
        </Label>
      </Form.SendButton>
    </Form>
  );
};

export default ChatTextareaForm;
