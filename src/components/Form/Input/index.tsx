import { ChangeEvent, useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  }

  return (
  <input type="text" onChange={handleChange} value={value}></input>)
}
