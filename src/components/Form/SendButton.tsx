import React, { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../utils/enums';

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #818BA0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border: none;
    outline: none;
`;

interface Props {
  type?: Partial<ButtonType>,
  children?: ReactNode;
  text?: string;
  styles?: CSSProperties;
}

export const SendButton = ({
  type, children, text, styles,
}: Props) => (
  <StyledButton
    type={type}
    style={styles}
  >
    {text || children || ''}
  </StyledButton>
);
