import React, { FormEvent, ReactNode, CSSProperties } from 'react';
import { Input } from './Input';

interface Props {
  children: ReactNode;
  styles?: CSSProperties;
}

const Form = ({ children, styles }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(((e.target as HTMLFormElement).firstChild as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit} style={styles}>{children}</form>
  );
};

Form.Input = Input;

export { Form };
