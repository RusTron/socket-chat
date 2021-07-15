import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #009bb7;
  border-radius: 2px;
`;

interface Props {
  styles?: React.CSSProperties;
}
export const Input = React.forwardRef<HTMLInputElement, Props>(({ styles }, ref) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trimLeft());
  };

  return (
    <StyledInput
      type="text"
      onChange={handleChange}
      value={value}
      style={styles}
      ref={ref}
    />
  );
});
