import React, { useContext, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { socketStore, createSocket } from '../../socket';
import { AppContext } from '../../context';
import { Form } from '../../components/Form';
import { Headings } from '../../components/Headings';
import { inputStyles, buttonStyles, formStyles } from './styles';
import { HeadingType, ActionTypes, ButtonType } from '../../utils/enums';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = ({ history }: RouteComponentProps) => {
  const { dispatch } = useContext(AppContext);

  const redirect = (ourName: string) => history.push(`/${ourName}`);

  const setSocketConnection = (ourName: string) => {
    createSocket();
    console.warn(ourName);
    const { socket } = socketStore;

    if (!socket) return;

    socket.onopen = () => {
      socket.send('2probe');
      redirect(ourName);
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const ourName = ((e.target as HTMLFormElement).firstChild as HTMLInputElement).value;

    dispatch({
      type: ActionTypes.SET_OUR_NAME,
      payload: ourName,
    });

    setSocketConnection(ourName);
  };

  return (
    <LoginWrapper>
      <Headings tag={HeadingType.h1}>Enter your name</Headings>
      <Form onSubmit={handleSubmit} styles={formStyles}>
        <Form.Input styles={inputStyles} />
        <Form.Button type={ButtonType.submit} text="Join" styles={buttonStyles} />
      </Form>
    </LoginWrapper>
  );
};

export default withRouter(Login);
