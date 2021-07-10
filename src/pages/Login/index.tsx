import { Form } from '../../components/Form';
import { Headings } from '../../components/Headings';
import { HeadingType } from '../../utils/enums';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Login = () => {
  return (
    <LoginWrapper>
      <Headings tag={HeadingType.h1}>
        Enter your name
      </Headings>
      <Form>
        <Form.Input/>
      </Form>
    </LoginWrapper>
  );
}
