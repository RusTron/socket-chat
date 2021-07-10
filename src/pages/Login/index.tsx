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

const Input = styled(Form.Input)`
  width: 300px;
`

const FormWrapper = styled(Form)`
background-color: red;
`
export const Login = () => {

  const inputStyles = {
    width: '300px',
  }

  return (
    <LoginWrapper>
      <Headings tag={HeadingType.h1}>
        Enter your name
      </Headings>
      <FormWrapper>
        <Input styles={inputStyles}/>
      </FormWrapper>
    </LoginWrapper>
  );
}
