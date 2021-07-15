import React, { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';
import { ButtonType } from 'src/utils/enums';

const StyledButton = styled.button`
  line-height: 1.5;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  color: #fff;
  background: #009bb7;
  border-color: #009bb7;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);

    :hover {
      background: #01859C;
      border-color: #01859C;
    }
`;

interface Props {
  type?: Partial<ButtonType>,
  children?: ReactNode;
  text?: string;
  styles?: CSSProperties;
}

export const PrimaryButton = ({
  type, children, text, styles,
}: Props) => (
  <StyledButton
    type={type}
    style={styles}
  >
    {text || children || ''}
  </StyledButton>
);
