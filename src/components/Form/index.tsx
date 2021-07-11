import React, { ReactNode, FormEvent, CSSProperties } from 'react';
import { Input } from './Input';

interface Props {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  styles?: CSSProperties;
}

const Form = ({ children, onSubmit, styles }: Props) => (
  <form onSubmit={onSubmit} style={styles}>
    {children}
  </form>
);

Form.Input = Input;

export { Form };
