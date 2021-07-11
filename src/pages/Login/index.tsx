import React from 'react';
import styled from 'styled-components';
import { Form } from '../../components/Form';
import { Headings } from '../../components/Headings';
import { HeadingType } from '../../utils/enums';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login = () => {
  const inputStyles = {
    width: '300px',
  };

  return (
    <LoginWrapper>
      <Headings tag={HeadingType.h1}>
        Enter your name
      </Headings>
      <Form.Input styles={inputStyles} />
    </LoginWrapper>
  );
};
