import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  color: #fff;
  padding: 0 40px;

  :hover {
    cursor: pointer;
    color: #dff;
  }
`;

export const Header = () => <HeaderWrapper>Log in</HeaderWrapper>;
