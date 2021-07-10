import styled from 'styled-components';

const LayoutContent = styled.div`
  height: 100%;
`

export const Content: React.FC = ({ children }) => (
    <LayoutContent>{children}</LayoutContent>
  );