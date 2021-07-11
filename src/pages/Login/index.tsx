import React, { useContext, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { Form } from '../../components/Form';
import { Headings } from '../../components/Headings';
import { HeadingType, ActionTypes } from '../../utils/enums';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = ({ history }: RouteComponentProps) => {
  const { dispatch } = useContext(AppContext);

  const inputStyles = {
    width: '300px',
  };

  const redirect = (ourName: string) => history.push(`/${ourName}`);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const ourName = ((e.target as HTMLFormElement).firstChild as HTMLInputElement).value;

    dispatch({
      type: ActionTypes.SET_OUR_NAME,
      payload: ourName,
    });

    redirect(ourName);
  };

  return (
    <LoginWrapper>
      <Headings tag={HeadingType.h1}>Enter your name</Headings>
      <Form onSubmit={handleSubmit}>
        <Form.Input styles={inputStyles} />
      </Form>
    </LoginWrapper>
  );
};

export default withRouter(Login);
