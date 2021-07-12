import React from 'react';
import styled from 'styled-components';

const LayoutContent = styled.div`
  height: calc(100% - 93px);
`;

interface Props {
  styles?: React.CSSProperties
}

export const Content: React.FC<Props> = ({ children, styles }) => (
  <LayoutContent style={styles}>{children}</LayoutContent>
);
