import { Form } from '../../components/Form';
import { Headings } from '../../components/Headings';
import { HeadingType } from '../../utils/enums';
import styled from 'styled-components';

const LoginForm = styled(Form)`

`

export const Login = () => {
  return (
    <>
      <Headings tag={HeadingType.h1}>
        Enter your name
      </Headings>
      <Form>
        <Form.Input/>
      </Form>
    </>
  );
}
