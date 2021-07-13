import React, {
  useState, useRef, FormEvent,
} from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { ButtonType } from '../utils/enums';
import { ReactComponent as InActiveLabel } from '../assets/images/inactive.svg';
import { ReactComponent as HalfLabel } from '../assets/images/half-label.svg';

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

  const addData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Form onSubmit={addData} styles={FormStyles}>
      <Form.Textarea ref={textarea} setButtonActive={setButtonActive} />
      <Form.SendButton
        type={ButtonType.submit}
        styles={buttonActive ? buttonStyles : undefined}
      >
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
