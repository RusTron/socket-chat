import { ChangeEvent, FormEvent } from 'react';
import { SyntheticEvent } from 'react';
import { Input } from './Input';

interface Props {
  children: React.ReactNode
}

const Form = ({ children }: Props):JSX.Element => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(((e.target as HTMLFormElement).firstChild as HTMLInputElement).value);
  };

  return (
  <form onSubmit={handleSubmit}>{children}</form>
)}

Form.Input = Input;

export { Form };
