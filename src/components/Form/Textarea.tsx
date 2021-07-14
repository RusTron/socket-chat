import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  padding: 21px 0 22px 24px;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  resize: none;
  font-family: Roboto, Arial;
  font-size: 16px;
  line-height: 19px;
  color: #182a40;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 19px;
    color: #d7dbe6;
  }
`;

interface Props {
  styles?: React.CSSProperties;
  children?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ children, styles, onChange, value }, ref) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      setQuery(e.target.value.trimLeft());
    };

    return (
      <StyledTextarea
        placeholder="Write a message"
        value={value || query}
        onChange={onChange || handleChange}
        style={styles}
        ref={ref}
      >
        {children}
      </StyledTextarea>
    );
  },
);
