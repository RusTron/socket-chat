import React, { useRef, useEffect, useContext, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Toastify } from 'src/components/Notificaations/Toastify';
import { socketStore, createSocket } from 'src/socket';
import { AppContext } from 'src/context';
import { Form } from 'src/components/Form';
import { Headings } from 'src/components/Headings';
import { HeadingType, ActionTypes, ButtonType, SocketActions } from 'src/utils/enums';
import { inputStyles, buttonStyles, formStyles } from './styles';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = ({ history }: RouteComponentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(AppContext);

  const redirect = (ourName: string) => history.push(`/${ourName}`);

  const setSocketConnection = (ourName: string) => {
    createSocket();
    const { socket } = socketStore;

    if (!socket) return;

    socket.onopen = () => {
      socket.send(`${SocketActions.ping}probe`);
      redirect(ourName);
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const ourName = ((e.target as HTMLFormElement).firstChild as HTMLInputElement).value;
    if (ourName.length > 20) return toast('The name is too long! Please enter no more then 20 characters');
    if (!ourName.length) return toast('Please enter enter at least one character');

    dispatch({
      type: ActionTypes.SET_OUR_NAME,
      payload: ourName,
    });

    setSocketConnection(ourName);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <LoginWrapper>
      <Toastify />
      <Headings tag={HeadingType.h1}>Enter your name</Headings>
      <Form onSubmit={handleSubmit} styles={formStyles}>
        <Form.Input styles={inputStyles} ref={inputRef} />
        <Form.Button type={ButtonType.submit} text="Join" styles={buttonStyles} />
      </Form>
    </LoginWrapper>
  );
};

export default withRouter(Login);
