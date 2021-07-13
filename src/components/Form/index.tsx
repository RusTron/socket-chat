import React, { ReactNode, FormEvent, CSSProperties } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import { Textarea } from './Textarea';
import { SendButton } from './SendButton';

const StyledForm = styled.form`
  display: flex;
`;

interface Props {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  styles?: CSSProperties;
}

const Form = ({ children, onSubmit, styles }: Props) => (
  <StyledForm onSubmit={onSubmit} style={styles}>
    {children}
  </StyledForm>
);

Form.Input = Input;
Form.Button = PrimaryButton;
Form.Textarea = Textarea;
Form.SendButton = SendButton;

export { Form };
