import React, { useState, useRef, useEffect, useContext, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { AppContext } from 'src/context';
import { setNewMessage } from 'src/context/actions';
import { NewMessage } from 'src/types';
import useDebounce from 'src/hooks/useDebounce';
import { ReactComponent as InActiveLabel } from 'src/assets/images/inactive.svg';
import { ReactComponent as HalfLabel } from 'src/assets/images/half-label.svg';
import { socketStore } from 'src/socket';
import { ActionTypes, ButtonType, SocketActions, Typing } from 'src/utils/enums';
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
  const [value, setValue] = useState<string>('');

  const textarea = useRef<HTMLTextAreaElement>(null);

  const { socket, typing } = socketStore;

  const {
    state: { ourName },
    dispatch,
  } = useContext(AppContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!value) return;

    const data = [ActionTypes.SET_NEW_MESSAGE, { username: ourName, message: value, time: moment().format('HH:mm') }];

    dispatch(setNewMessage(data as NewMessage));

    if (socket) {
      socket.send(`${SocketActions.message}${JSON.stringify([ActionTypes.SET_NEW_MESSAGE, value])}`);
    }
    setValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value.trimLeft());
    if (!typing && socket) {
      socket.send(`${SocketActions.message}${JSON.stringify([Typing.start, { username: ourName }])}`);
      socketStore.typing = true;
    }
  };

  const debounceValue = useDebounce(value, 1000);

  useEffect(() => {
    if (!socket || !typing) return;
    socket.send(`${SocketActions.message}${JSON.stringify([Typing.stop])}`);
    socketStore.typing = false;
  }, [debounceValue]);

  return (
    <Form onSubmit={handleSubmit} styles={FormStyles}>
      <Form.Textarea ref={textarea} onChange={handleChange} value={value} />
      <Form.SendButton type={ButtonType.submit} styles={value ? buttonStyles : undefined}>
        <Label>
          {value ? (
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
